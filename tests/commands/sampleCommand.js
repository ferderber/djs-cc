const Command = require('../../src/command');
const Argument = require('../../src/argument');
const ArgumentType = require('../../src/argumentType');

class SampleCommand extends Command {
    constructor() {
        super({
            name: 'test',
            description: 'A test command',
            usage: '!test',
            args: [new Argument({ name: 'sampleArg', type: ArgumentType.Integer, required: true })]
        });
    }
    async run(msg, args) {
        await msg.reply(`argument sampleArg was: ${args.get('sampleArg')}`);
        //This sampleCommand returns args for testing
        return args;
    }
    hasPermission(msg) {
        return msg.author.username.includes('Cobalt');
    }
}
module.exports = SampleCommand;