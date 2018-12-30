const {Command, Argument, ArgumentType} = require('../../src');

class SampleCommand extends Command {
    constructor() {
        super({
            name: 'test',
            aliases: ['t', 'test2'],
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