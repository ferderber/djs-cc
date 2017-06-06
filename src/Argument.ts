import { GuildMember } from 'discord.js';
import Message = require('./Message');
import ArgumentOptions = require('./ArgumentOptions');
import ArgumentType = require('./ArgumentType');
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
    /**
     * Checks if a the argument is a number
     * @param str
     */
    private isNumber(str: string) : boolean {
        let number = parseFloat(str);
        return !isNaN(number) && isFinite(number);
    }
    /**
     * Gets the user Id from a mention string
     * @param mention A mention string (<@userId>)
     */
    private getIdFromMention(mention: string) : string {
        return mention.substring(mention.indexOf('@') + 1, mention.indexOf('>'));
    }
    /**
     * Retrieves argument value from current argument string
     * @param str Current argument value to parse
     * @param message Message that invoked the command
     */
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