const {
    Client
} = require('../src/Client');
const SampleCommand = require('./commands/SampleCommand');
const SqlProvider = require('../src/providers/SqlProvider');
const config = require('./sample-config');
const bot = new Client();
let numDefaultCommands = bot.commands.size;
class ErrorCommand extends SampleCommand {
    constructor() {
        super();
        this.args = [];
    }
    run(msg, args) {
        throw new Error('sample text');
    }
}
const fakeMsg = {
    content: "!test 500",
    value: 500,
    author: {
        username: "Cobalt#1234"
    },
    guild: {
        members: [{
            user: {
                username: "Cobalt#1243"
            }
        }]
    }
};

let reply = (expectedMessage, done) => (str) => {
    expect(str).toEqual(expectedMessage);
    return done();
};

beforeAll(async() => {bot.registerCommand(new SampleCommand()); numDefaultCommands = bot.commands.size;});


test('Valid command usage', async(done) => {
    fakeMsg.reply = reply(`argument sampleArg was: ${fakeMsg.value}`, done);
    await bot.onMessage(fakeMsg); //Simulate message
});

test('Valid help command usage', async(done) => {
    fakeMsg.content = "!test?";
    fakeMsg.reply = (obj) => {
        expect(obj).toBeInstanceOf(Object);
        return done();
    };
    await bot.onMessage(fakeMsg);
});

test('Non existent command', async(done) => {
    fakeMsg.content = "!unknowncommand";
    fakeMsg.reply = reply('Unknown command. Try `!help`', done); //Expected message for unknown command
    await bot.onMessage(fakeMsg);
});

test('Error in command', async(done) => {
    fakeMsg.content = "!test @aaa";
    fakeMsg.reply = reply('Error: Converting provided argument (`@aaa`) `sampleArg` to Integer', done);
    await bot.onMessage(fakeMsg);
});

test('Non permitted user', async(done) => {
    fakeMsg.author.username = "OtherUser"; //invalid user (not permitted)
    fakeMsg.content = "!test 50"; //valid usage
    fakeMsg.reply = reply('You do not have permission to use \`!test\`', done);
    await bot.onMessage(fakeMsg);
});

test('command that throws error', async(done) => {
    bot.unregisterCommand(new SampleCommand());
    bot.registerCommand(new ErrorCommand());
    fakeMsg.author.username = 'Cobalt';
    fakeMsg.content = "!test";
    fakeMsg.reply = reply('An error occured: sample text', done);
    await bot.onMessage(fakeMsg);
});

test('registerProvider registers to settings property', () => {
    bot.registerProvider(config);
    expect(bot.settings).toEqual(new SqlProvider(config));
});

test('registerCommandDirectory valid', async(done) => {
    bot.unregisterCommand(new SampleCommand());
    await bot.registerCommandDirectory(__dirname + '/commands');
    fakeMsg.author.username = 'Cobalt';
    fakeMsg.content = "!test 500";
    fakeMsg.reply = reply('argument sampleArg was: 500', done);
    await bot.onMessage(fakeMsg);
});

test('registerCommandDirectory fail', async() => {
    await bot.registerCommandDirectory('fakePath');
    expect(bot.commands.size).toEqual(numDefaultCommands);
});

afterAll(async(done) => {
    await bot.destroy();
    done();
});