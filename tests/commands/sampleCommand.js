const Command = require('../../src/command');
const Argument = require('../../src/argument');
const ArgumentType = require('../../src/argumentType');

class SampleCommand extends Command {
    constructor() {
        super('test', 'A test command', '!test',
            [new Argument('sampleArg', ArgumentType.Integer, true)]);
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