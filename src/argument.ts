import { Message } from "./message";
import { ArgumentOptions } from "./argumentOptions";
import { ArgumentType } from "./argumentType";

export { ArgumentType };

export type ArgumentCollection = Map<string, Argument>;

export class Argument {
  name: string;
  type: ArgumentType;
  required: boolean;
  default: unknown;
  constructor(options: ArgumentOptions) {
    this.name = options.name;
    this.type = options.type || ArgumentType.String;
    this.required = options.required || false;
    this.default = options.default;
  }
  /**
   * Checks if a the argument is a number
   * @param str
   */
  private isNumber(str: string): boolean {
    const number = parseFloat(str);
    return !isNaN(number) && isFinite(number);
  }
  /**
   * Gets the user Id from a mention string
   * @param mention A mention string (<@userId> or <@!userId>)
   */
  private getIdFromMention(mention: string): string | null {
    const result = mention.match(/^<@!?(\d+)>$/);
    //if there is a match, return the first capture group (the id)
    if (result) {
      return result[1];
    } else {
      return null;
    }
  }
  /**
   * Retrieves argument value from current argument string
   * @param str Current argument value to parse
   * @param message Message that invoked the command
   */
  async parseArg(str: string, message: Message): Promise<unknown> {
    switch (this.type) {
      case "Integer" || "integer":
        if (this.isNumber(str)) return Number.parseInt(str);
        throw new Error(
          `Converting provided argument (\`${str}\`) \`${this.name}\` to Integer`
        );
      case "Float" || "float":
        if (this.isNumber(str)) return Number.parseFloat(str);
        throw new Error(
          `Converting provided argument (\`${str}\`) \`${this.name}\` to Float`
        );
      case "User" || "user": {
        const id = this.getIdFromMention(str);
        if (id) {
          const guildMember = await message?.guild?.members.fetch(id);
          if (guildMember) return guildMember.user;
          throw new Error(`Could not find user for argument \`${this.name}\``);
        } else {
          const guildMember = (
            await message?.guild?.members.fetch({ query: str })
          )?.first();
          if (guildMember) return guildMember.user;
          throw new Error(
            `Provided argument for \`${this.name}\` is not a reference to a user`
          );
        }
      }
      case "String" || "string":
      default:
        return str;
    }
  }
}
