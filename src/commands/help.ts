import { Command } from '../Command';
import { Message } from '../Message';
import { RichEmbed } from 'discord.js';
import { Argument } from '../Argument';

export class HelpCommand extends Command {
    constructor() {
        super({
            name: 'help',
            aliases: ['h'],
            description: 'Displays information about available commands',
            usage: 'help'
        });
    }
    async run(msg: Message, args: Map<string, Argument>) {
        let commands = msg.client.commands;
        let embed = new RichEmbed();
        embed.setTitle('Help Command');
        let parsedCommands = new Array<Command>();
        commands.forEach((cmd) => {
            if (!parsedCommands.find((c: Command) => cmd.name === c.name)) {
                embed.addField(`${cmd.name}:\u2001(${msg.client.prefix}${cmd.usage ? cmd.usage : cmd.name})`,
                    cmd.description);
                parsedCommands.push(cmd);
            }
        });
        msg.channel.send({ embed });
    }
}
