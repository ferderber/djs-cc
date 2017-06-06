import { Role } from 'discord.js';
import Message = require('./Message');
import Argument = require('./Argument');
import CommandOptions = require('./CommandOptions');

abstract class Command {
    name: string;
    aliases: string[] = [];
    description: string;
    usage: string;
    args: Argument[] = [];
    requiredRole: Role;
    constructor(options: CommandOptions) {
        this.name = options.name;
        this.aliases = options.aliases ? options.aliases : this.aliases;
        this.args = options.args ? options.args : this.args;
        this.description = options.description;
        this.usage = options.usage;
    }
    /**
     * Extracts a commands arguments from a message
     * @param message Message that invoked the command
     * @returns Map of the found arguments
     */
    parseArgs(message: Message): Map<string, Argument> {
        let userArgs = message.content.split(' ').splice(1);
        var argMap = new Map<string, Argument>();
        if (this.args.length === 0 && userArgs.length > 0) {
            throw new Error(`\`${this.name}\` does not have any arguments`);
        }
        for (let i = 0; i < this.args.length; i++) {
            let arg = this.args[i];
            if (i >= userArgs.length && arg.required) { throw new Error(); }
            else if (i >= userArgs.length) { break; }
            let userArg = userArgs[i];
            try {
                if (arg.required) {
                    argMap.set(arg.name, arg.parseArg(userArg, message));
                } else {
                    let value = arg.parseArg(userArg, message);
                    if (value !== undefined) {
                        argMap.set(arg.name, value);
                    }
                }
            } catch (e) {
                throw e;
            }
        }
        return argMap;
    }
    /**
     * @param msg Message that invoked the command
     * @returns Whether the user who wrote the message has permission (default: true)
     */
    public hasPermission(msg: Message): boolean {
        return true; //Default to true
    }
    /**
     * Main function run when a command is executed
     * @param msg Message that invoked the command
     * @param args Arguments extracted from the message
     */
    abstract run(msg: Message, args: Map<string, any>): Promise<any>
}
export = Command;