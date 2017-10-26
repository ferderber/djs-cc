const SampleCommand = require('./commands/SampleCommand');
const {Command} = require('../src/Command');
const Argument = require('../src/Argument').Argument;
const Collection = require('discord.js').Collection;
const cmd = new SampleCommand();
const arg1 = new Argument({ name: 'str', type: 'String', required: true });
const arg2 = new Argument({ name: 'num', type: 'Integer', required: false });
const arg3 = new Argument({ name: 'user', type: 'User', required: true });
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
test('ParseArgs: no arguments', async () => {
    expect(cmd.parseArgs(message)).toEqual(new Map());
    message.content += " arg";
    expect(() => cmd.parseArgs(message)).toThrow('`test` does not have any arguments');
});

test('ParseArgs: one argument (required)', async () => {
    cmd.args = [arg1];
    message.content += " strValue";
    expect(cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue']]));
});

test('ParseArgs: one argument (not required)', async () => {
    cmd.args = [arg2];
    expect(cmd.parseArgs(message)).toEqual(new Map());
});

test('ParseArgs: two arguments (required, not required)', async () => {
    message.content += " strValue";
    cmd.args = [arg1, arg2];
    expect(cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue']]));
    message.content = message.content + " 500";
    expect(cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue'], ['num', 500]]));
});

test('Default hasPermissions is true', () => {
    expect(new Command({}).hasPermission()).toEqual(true);
});

test('ParseArgs: two arguments (required, required)', async () => {
    cmd.args = [arg1, arg3];
    message.content = "!test strValue";
    expect(() => cmd.parseArgs(message)).toThrow();
    message.content = message.content + ' <@125385861117378563>';
    expect(cmd.parseArgs(message)).toEqual(new Map([['str', 'strValue'], ['user', message.guild.members.first().user]]));
});