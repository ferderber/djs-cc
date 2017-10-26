const Argument = require('../src/Argument').Argument;
const Collection = require('discord.js').Collection;
const config = require('./sample-config');
let message = {
    content: "!test 500",
    value: 500,
    guild: {
        members: new Collection([
            ["125385861117378563", { displayName: 'Cobalt', user: { username: "Cobalt" } }],
            ["321", { displayName: 'testuser', user: { username: "testuser" } }]
        ])
    }
};

//Mentions are converted into id so the tests will use the converted form
//https://discordapp.com/developers/docs/resources/channel#message-formatting

test('ParseArg: Converting', async () => {
    let arg = new Argument({ name: 'test', type: 'String', required: true });
    expect(arg.parseArg('value', message)).toEqual('value');
});
test('ParseArg: Number', async () => {
    let arg2 = new Argument({ name: 'test2', type: 'Integer', required: true });
    expect(arg2.parseArg('55', message)).toBe(55);
});

test('ParseArg: Float', async () => {
    let arg3 = new Argument({ name: 'test3', type: 'Float', required: true });
    expect(arg3.parseArg('55.34111', message)).toBe(55.34111);
    expect(() => arg3.parseArg('abc', message)).toThrow();
});
test('ParseArg: User', async () => {
    let arg = new Argument({ name: 'test', type: 'User', required: true });
    expect(arg.parseArg('<@125385861117378563>', message)).toEqual(message.guild.members.first().user);
});
test('ParseArg: User string', async () => {
    let arg = new Argument({ name: 'test', type: 'User', required: true });
    expect(arg.parseArg('Cobalt', message)).toEqual(message.guild.members.first().user);
});

test('ParseArg: invalid user', async () => {
    let arg = new Argument({ name: 'test', type: 'User', required: true });
    expect(() => arg.parseArg('SomeString', message)).toThrow('Provided argument for `test` is not a reference to a user');
});

test('ParseArg: Unknown user', async () => {
    let arg = new Argument({ name: 'test', type: 'User', required: true });
    expect(() => arg.parseArg('<@123>', message)).toThrow('Could not find user for argument `test`');
});
