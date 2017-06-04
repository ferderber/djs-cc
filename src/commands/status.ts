import Command = require('../Command');
import Argument = require('../argument');
import Message = require('../Message');

export default class StatusCommand extends Command {
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