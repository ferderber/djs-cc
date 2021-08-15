---
id: "index"
title: "djs-cc"
slug: "/api"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# djs-cc

[![npm Version](https://img.shields.io/npm/v/djs-cc.svg)](https://www.npmjs.com/package/djs-cc)
[![Test Coverage](https://codeclimate.com/github/matthewferderber/djs-cc/badges/coverage.svg)](https://codeclimate.com/github/matthewferderber/djs-cc)

**djs-cc (discord.js-commandclient)** is a typescript library for discord.js that adds simple command creation and configuration storing capabilities.

The idea for this project came after using many different command frameworks and wanting a simpler method of displaying command results and errors. I wanted to try making my own version partially as a learning experience but also to change and add features I wanted for future projects.

## Installation

`npm install --save djs-cc`

## Features

- Class based commands
- Typescript!
- `async/await` support
- Simple argument parsing
- Error handling
- Per Guild SQL based settings storage

### Planned Features

- Reaction based command features
- Slash based command support
- Updating command status messages (Ex: Progress bar)
- Base commands (help, restart, status, config, alias)
- Auto-deleting bot replies (Ex: help message dissapears after two minutes)
- Make library compatible with other messaging applications/libraries

## Sample usage

```javascript
const { Client, Command, Argument, ArgumentType } = require("djs-cc");

class SampleCommand extends Command {
  constructor() {
    super({
      name: "test",
      description: "A test command",
      usage: "!test",
      args: [
        new Argument({
          name: "sampleArg",
          type: ArgumentType.Integer,
          required: true,
        }),
      ],
    });
  }
  async run(msg, args) {
    await msg.reply(`argument sampleArg was: ${args.get("sampleArg")}`);
  }
  //(optional) function to check if the user is allowed to use the command
  hasPermission(msg) {
    return msg.author.username.includes("Cobalt");
  }
}
const bot = new Client(["Intents_Here"]);
bot.registerCommand(new SampleCommand());
bot.login(process.env.DISCORD_BOT_TOKEN);
```

## Requirements

- Node.js version `>v16.0.0`
- discord.js `>v13.0.0`
- sqlite3, mysql, or pg (If you plan on storing data)
