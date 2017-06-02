# djs-cc

[![npm Version](https://img.shields.io/npm/v/djs-cc.svg)](https://www.npmjs.com/package/djs-cc)
[![Build Status](https://travis-ci.org/matthewferderber/djs-cc.svg?branch=master)](https://travis-ci.org/matthewferderber/djs-cc)
[![Test Coverage](https://codeclimate.com/github/matthewferderber/djs-cc/badges/coverage.svg)](https://codeclimate.com/github/matthewferderber/djs-cc)

**djs-cc (discord.js-commandclient)** is a typescript library for discord.js that adds simple command creation and configuration storing capabilities.

The idea for this project came after using many different command frameworks and wanting a simpler method of displaying command results and errors. I wanted to try making my own version partially as a learning experience but also to change and add features I wanted for future projects.

## Installation

`npm install --save djs-cc`

## Features

- Class based commands
- `async/await` support
- Simple argument parsing
- Error handling
- Per Guild SQL based settings storage

### Planned Features

- Reaction based command features
- Updating command status messages (Ex: Progress bar)
- Base commands (help, restart, status, config, alias)
- Auto-deleting bot replies (Ex: help message dissapears after two minutes)
- Make library compatible with other messaging applications/libraries

## Sample usage

```javascript
const CommandClient = require('djs-cc');
const Command = CommandClient.Command;
const Argument = CommandClient.Argument;
const ArgumentType = CommandClient.ArgumentType;

class SampleCommand extends Command {
    constructor() {
        super('test', 'A test command', '!test',
            [new Argument('sampleArg', ArgumentType.Integer, true)]);
    }
    async run(msg, args) {
        await msg.reply(`argument sampleArg was: ${args.get('sampleArg')}`);
    }
    //(optional) function to check if the user is allowed to use the command
    hasPermission(msg) {
        return msg.author.username.includes('Cobalt');
    }
}
const bot = new CommandClient.Client();
bot.registerCommand(new SampleCommand());
bot.login(process.env.DISCORD_BOT_TOKEN);
```

## Requirements

- Node.js version `7.0.0` (with `--harmony` flag for `async`) or `>7.6.0`
- discord.js
- sqlite3, mysql, or pg (If you plan on storing data)
