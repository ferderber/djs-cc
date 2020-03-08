import { GuildMember, User } from 'discord.js';
import { Message } from './Message';
import { ArgumentOptions } from './ArgumentOptions';
import { ArgumentType } from './ArgumentType';

export { ArgumentType };

export class Argument {
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
    private isNumber(str: string): boolean {
        let number = parseFloat(str);
        return !isNaN(number) && isFinite(number);
    }
    /**
     * Gets the user Id from a mention string
     * @param mention A mention string (<@userId> or <@!userId>)
     */
    private getIdFromMention(mention: string): string {
        let result = mention.match(/^<@!?(\d+)>$/);
        //if there is a match, return the first capture group (the id)
        if (result) {
            return result[1];
        }
        else {
            return null;
        }
    }
    /**
     * Retrieves argument value from current argument string
     * @param str Current argument value to parse
     * @param message Message that invoked the command
     */
    async parseArg(str: string, message: Message): Promise<any> {
        switch (this.type) {
            case 'Integer' || 'integer':
                if (this.isNumber(str)) {
                    return Number.parseInt(str);
                }
                else {
                    throw new Error(`Converting provided argument (\`${str}\`) \`${this.name}\` to Integer`);
                }
            case 'Float' || 'float':
                if (this.isNumber(str)) {
                    return Number.parseFloat(str);
                }
                else {
                    throw new Error(`Converting provided argument (\`${str}\`) \`${this.name}\` to Float`);
                }
            case 'String' || 'string':
                return str;
            case 'User' || 'user':
                let id = this.getIdFromMention(str);
                if (id) {
                    let guildMember = await message.guild.members.fetch(id);
                    if (guildMember) {
                        return guildMember.user;
                    } else {
                        throw new Error(`Could not find user for argument \`${this.name}\``)
                    }
                } else {
                    let guildMember = (await message.guild.members.fetch({query: str})).first();
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
