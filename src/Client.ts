import Config = require('./Config');
import Discord = require('discord.js');
import Provider = require('./providers/Provider');
import SQLProvider = require('./providers/SqlProvider');
import Command = require('./Command');
import Message = require('./Message');
import defaultCommands = require('./commands');
import { getCommandsFromDirectory } from './_helpers';
class Client extends Discord.Client {
    commands: Map<string, Command> = new Map();
    prefix: string = '!';
    public settings: Provider;
    constructor() {
        super();
        this.registerCommands(defaultCommands);
        this.on('message', this.onMessage);
    }
    /**
     * @param msg Any message seen by the bot
     */
    async onMessage(msg: Discord.Message) {
        if (msg.content.indexOf(this.prefix) === 0) {
            let argStrings = msg.content.split(' ');
            let cmdString = argStrings[0].substring(1);
            let cmd = this.commands.get(cmdString);
            let message = <Message>msg; //Cast to custom Message wrapper
            if (cmd) {
                if (cmd.hasPermission === undefined || cmd.hasPermission(message)) {
                    let args;
                    try {
                        args = cmd.parseArgs(message);
                    } catch (e) {
                        message.reply(`Error: ${e.message}`);
                    }
                    if (args) {
                        try {
                            let result = await cmd.run(message, args);
                        } catch (e) {
                            message.reply(`An error occured: ${e.message}`);
                        }
                    }
                } else {
                    message.reply(`You do not have permission to use \`${this.prefix}${cmd.name}\``);
                }
            } else {
                message.reply(`Unknown command. Try \`${this.prefix}help\``);
            }
        }
    }
    /**
     * Registers a command.
     * @param cmd Instance of a command
     */
    registerCommand(cmd: Command) {
        this.commands.set(cmd.name, cmd);
    }
    /**
     * Registers an array of command classes as commands.
     * @param cmds Array of command classes
     */
    registerCommands<T extends Command>(cmds: (new () => T)[]): void {
        cmds.forEach(cmd => {
            let cmdInstance = new cmd();
            this.commands.set(cmdInstance.name, cmdInstance);
        });
    }

    /**
     * Registers all commands within the given directory
     * @param path Path to the directory containing commands
     */
    async registerCommandDirectory(path: string) {
        try {
            this.registerCommands(await getCommandsFromDirectory(path));
        } catch (err) {
            console.error('An error occured while loading commands from a directory:' + err);
        }
    }

    /**
     * Removes a command from the bots command Map
     * @param cmd Instance of a command
     */
    unregisterCommand(cmd: Command) {
        this.commands.delete(cmd.name);
    }
    /**
     * Sets the clients configuration provider
     * @param config
     */
    registerProvider(config: Config) {
        this.settings = new SQLProvider(config);
    }
}
export = Client;