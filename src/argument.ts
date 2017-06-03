import { isNumber } from 'util';
import { Message, GuildMember } from 'discord.js';
import ArgumentOptions = require('./argumentOptions');
import ArgumentType = require('./argumentType');
class Argument {
    name: string;
    type: ArgumentType;
    required: boolean;
    default: any;
    constructor(options: ArgumentOptions) {
        this.name = options.name;
        this.type = options.type;
        this.required = options.required;
        this.default = options.default;
    }
    private isNumber(str: string) : boolean {
        let number = parseFloat(str);
        return !isNaN(number) && isFinite(number);
    }
    private getIdFromMention(mention: string) : string {
        return mention.substring(mention.indexOf('@') + 1, mention.indexOf('>'));
    }
    parseArg(str: string, message: Message): any {
        switch (this.type) {
            case ArgumentType.Integer:
                if (this.isNumber(str)) {
                    return Number.parseInt(str);
                }
                else {
                    throw new Error(`Converting provided argument (\`${str}\`) \`${this.name}\` to Integer`);
                }
            case ArgumentType.Float:
                if (this.isNumber(str)) {
                    return Number.parseFloat(str);
                }
                else {
                    throw new Error(`Converting provided argument (\`${str}\`) \`${this.name}\` to Float`);
                }
            case ArgumentType.String:
                return str;
            case ArgumentType.User:
                let userStr = str;
                let id;
                if (userStr.match(/^<@\d+>$/)) {
                    let guildMember = message.guild.members.get(this.getIdFromMention(userStr));
                    if (guildMember) {
                        return guildMember.user;
                    } else {
                        throw new Error(`Could not find user for argument \`${this.name}\``)
                    }
                } else {
                    let guildMember = message.guild.members.find('displayName', str);
                    if (guildMember) {
                        return guildMember.user;
                    }
                    else {
                        throw new Error(`Provided argument for \`${this.name}\` is not a reference to a user`);
                    }
                }
        }
    }
}
export = Argument;