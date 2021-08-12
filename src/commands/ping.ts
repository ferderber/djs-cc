import { Command } from "../command";
import { Message } from "../message";
import { Argument } from "../argument";
export default class PingCommand extends Command {
  constructor() {
    super({
      name: "ping",
      description: "Returns a message",
      usage: "ping",
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(msg: Message, _args: Map<string, Argument>): Promise<void> {
    msg.reply("Pong!");
  }
}
