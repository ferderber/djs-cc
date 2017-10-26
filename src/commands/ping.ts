import { Command } from '../Command';
import { Message } from '../Message';
import { Argument } from '../Argument';
class PingCommand extends Command {
    constructor() {
        super({
            name: 'ping',
            description: 'Returns a message',
            usage: 'ping',
        });
    }
    async run(msg: Message, args: Map<string, Argument>) {
        msg.reply('Pong!');
    }
}

export = PingCommand;