import { Command, Argument, ArgumentType } from "../..";
import { ArgumentCollection } from "../../argument";
import { Message } from "../../message";

export class SampleCommand extends Command {
  constructor() {
    super({
      name: "test",
      aliases: ["t", "test2"],
      description: "A test command",
      usage: "!test",
      args: [
        new Argument({
          name: "sampleArg",
          type: ArgumentType.Integer,
          required: true,
        }),
      ],
    });
  }
  async run(
    msg: Message,
    args: ArgumentCollection
  ): Promise<ArgumentCollection> {
    await msg.reply(`argument sampleArg was: ${args.get("sampleArg")}`);
    //This sampleCommand returns args for testing
    return args;
  }
  hasPermission(msg: Message): boolean {
    return msg.author.username.includes("Cobalt");
  }
}

export default SampleCommand;
