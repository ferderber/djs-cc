import Config = require('./config');
import Discord = require('discord.js');
import Provider = require('./providers/provider');
import SQLProvider = require('./providers/sqlProvider');
import Command = require('./command');
class Client extends Discord.Client {
    commands: Map<string, Command> = new Map();
    prefix: string = '!';
    public settings: Provider;
    constructor() {
        super();
        this.on('message', this.onMessage);
    }
    async onMessage(msg: Discord.Message) {
        if (msg.content.indexOf(this.prefix) === 0) {
            let argStrings = msg.content.split(' ');
            let cmdString = argStrings[0].substring(1);
            let cmd = this.commands.get(cmdString);
            if (cmd) {
                if (cmd.hasPermission === undefined || cmd.hasPermission(msg)) {
                    let args;
                    try {
                        args = cmd.parseArgs(msg);
                    } catch (e) {
                        msg.reply(`Error: ${e.message}`);
                    }
                    if (args) {
                        try {
                            let result = await cmd.run(msg, args);
                        } catch (e) {
                            msg.reply(`An error occured: ${e.message}`);
                        }
                    }
                } else {
                    msg.reply(`You do not have permission to use \`${this.prefix}${cmd.name}\``);
                }
            } else {
                msg.reply(`Unknown command. Try \`${this.prefix}help\``);
            }
        }
    }
    registerCommand(cmd: Command) {
        this.commands.set(cmd.name, cmd);
    }
    unregisterCommand(cmd: Command) {
        this.commands.delete(cmd.name);
    }
    registerProvider(config: Config) {
        this.settings = new SQLProvider(config);
    }
}
export = Client;