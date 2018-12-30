import { Command } from '../Command';
import { Argument } from '../Argument';
import { Message } from '../Message';

export class StatusCommand extends Command {
    constructor() {
        super({
            name: 'status',
            description: 'Displays status information about the bot',
            usage: 'status'
        });
    }
    async run(msg: Message, args: Map<string, Argument>) {
        msg.reply('TODO: implement');
    }

}
