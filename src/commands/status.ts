import { Command } from "../command";
import { Argument } from "../argument";
import { Message } from "../message";

export default class StatusCommand extends Command {
  constructor() {
    super({
      name: "status",
      description: "Displays status information about the bot",
      usage: "status",
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(msg: Message, _args: Map<string, Argument>): Promise<void> {
    msg.reply("TODO: implement");
  }
}
