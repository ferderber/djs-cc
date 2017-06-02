import { Message, Role } from 'discord.js';
import Argument = require('./argument');

abstract class Command {
    name: string;
    description: string;
    usage: string;
    args: Argument[] = [];
    requiredRole: Role;
    constructor(name?: string, description?: string, usage?: string, args?: Argument[]) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.args = args;
    }
    parseArgs(message: Message): Map<string, Argument> {
        let userArgs = message.content.split(' ').splice(1);
        var argMap = new Map<string, Argument>();
        if(this.args.length === 0 && userArgs.length > 0) {
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
    public abstract hasPermission(msg: Message): boolean
    abstract run(msg: Message, args: Map<string, any>): Promise<any>
}
export = Command;