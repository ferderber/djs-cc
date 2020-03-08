const SampleCommand = require('./commands/SampleCommand');
const {Command, Argument} = require('../src');
const Collection = require('discord.js').Collection;
const cmd = new SampleCommand();
const arg1 = new Argument({ name: 'str', type: 'String', required: true });
const arg2 = new Argument({ name: 'num', type: 'Integer', required: false });
const arg3 = new Argument({ name: 'user', type: 'User', required: true });
const arg4 = new Argument({ name: 'str4', type: 'String', required: true });
let message;
beforeEach(() => {
    cmd.args = [];
    message = {
        content: "!test",
        value: 500,
        guild: {
            members: new Collection([
                ["125385861117378563", { displayName: 'Cobalt', user: { username: "Cobalt" } }],
                ["321", { displayName: 'testuser', user: { username: "testuser" } }]
            ])
        }
    };
});

// Disabling this test until discord.js client is fully mocked
// test('ParseArgs: no arguments', async () => {
//     expect(await cmd.parseArgs(message)).toEqual(new Map());
//     message.content += " arg";
//     expect(async () => await cmd.parseArgs(message)).toThrow('`test` does not have any arguments');
// });

test('ParseArgs: one argument (required)', async () => {
    cmd.args = [arg1];
    message.content += " strValue";
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue']]));
});

test('ParseArgs: one argument (not required)', async () => {
    cmd.args = [arg2];
    expect(await cmd.parseArgs(message)).toEqual(new Map());
});

test('ParseArgs: two arguments (required, not required)', async () => {
    message.content += " strValue";
    cmd.args = [arg1, arg2];
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue']]));
    message.content = message.content + " 500";
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue'], ['num', 500]]));
});

test('Default hasPermissions is true', () => {
    expect(new Command({}).hasPermission()).toEqual(true);
});

// Disabling this test until discord.js client is fully mocked
// test('ParseArgs: two arguments (required, required)', async () => {
//     cmd.args = [arg1, arg3];
//     message.content = "!test strValue";
//     expect(async () => await cmd.parseArgs(message)).toThrow();
//     message.content = message.content + ' <@125385861117378563>';
//     expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue'], ['user', message.guild.members.first().user]]));
// });

test('ParseArgs: two arguments, multi-word string', async () => {
    cmd.args = [arg1, arg4];
    message.content = "!test string multiple word string";
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'string'], ['str4', 'multiple word string']]));
    message.content = '!test "multiple words wrapped in quotes" end string';
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'multiple words wrapped in quotes'], ['str4', 'end string']]));
    message.content = '!test "multiple words wrapped in quotes" "end string wrapped in quotes"';
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'multiple words wrapped in quotes'], ['str4', 'end string wrapped in quotes']]));
    message.content = '!test string "end string wrapped in quotes"';
    expect(await cmd.parseArgs(message)).toEqual(new Map([['str', 'string'], ['str4', 'end string wrapped in quotes']]));
});