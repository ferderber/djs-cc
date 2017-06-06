import Command = require('../Command');
import Argument = require('../argument');
import Message = require('../Message');
import Discord = require('discord.js');

class HelpCommand extends Command {
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
        let embed = new Discord.RichEmbed();
        embed.setTitle('Help Command');
        commands.forEach((cmd) =>
            embed.addField(`${cmd.name}:\u2001(${msg.client.prefix}${cmd.usage ? cmd.usage : cmd.name})`,
                cmd.description));
        msg.channel.send({ embed });
    }
}

export = HelpCommand;