import { Command } from "../command";
import { Message } from "../message";
import { MessageEmbed } from "discord.js";
import { Argument } from "../argument";

export default class HelpCommand extends Command {
  constructor() {
    super({
      name: "help",
      aliases: ["h"],
      description: "Displays information about available commands",
      usage: "help",
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(msg: Message, _args: Map<string, Argument>): Promise<void> {
    const commands = msg.client.commands;
    const embed = new MessageEmbed();
    embed.setTitle("Help Command");
    const parsedCommands = new Array<Command>();
    commands.forEach((cmd) => {
      if (!parsedCommands.find((c: Command) => cmd.name === c.name)) {
        embed.addField(
          `${cmd.name}:\u2001(${msg.client.prefix}${
            cmd.usage ? cmd.usage : cmd.name
          })`,
          cmd.description || "No Description"
        );
        parsedCommands.push(cmd);
      }
    });
    msg.channel.send({ embeds: [embed] });
  }
}
