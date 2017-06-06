import Command = require('../Command');
import Message = require('../Message');
import Argument = require('../Argument');

class PingCommand extends Command {
    constructor() {
        super({
            name: 'ping',
            description: 'Returns a message',
            usage: 'ping'
        });
    }
    async run(msg: Message, args: Map<string, Argument>) {
        msg.reply('Pong!');
    }
}

export = PingCommand;