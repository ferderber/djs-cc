---
sidebar_position: 1
slug: /
---

# Intro

Let's cover how to setup a basic Discord.js bot using djs-cc!

## Getting Started

First install djs-cc using either:
```bash
yarn add djs-cc discord.js
# OR
npm install djs-cc discord.js
```

Then, setup a client in the same way you would with `discord.js`:

```js
import { Intents } from "discord.js";
import { Client } from "djs-cc";

// We wrap this top-level code in a function to use async
(async () => {
  // Initialize Client with the same arguments as discord.js
  const client = new Client([
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]);
  client.on("ready", () => {
    console.log("Ready to start processing commands!");
  });

  console.log("Logging in...");
  await client.login(process.env.DISCORD_BOT_TOKEN);
  console.log("Logged in!");
})();
```

## Creating Commands

Now that we have the bot running, we can start adding features!

Here's a very basic example of a command you could add to your bot:

```ts
import { Command } from 'djs-cc';

class ReminderCommand extends Command {
  constructor() {
    super({
      name: "reminder",
      description: "Set a reminder and be notified after the time has elapsed.",
      usage: "!reminder 1h 'Study for COMP 361 exam!'",
      args: [
        new Argument({
          name: "time",
          type: ArgumentType.String,
          required: true,
        }),
        new Argument({
          name: "description",
          type: ArgumentType.String,
          required: true
        })
      ],
    });
  }
  async run(msg, args) {
    const time = args.get('time');
    setTimeout(() => msg.reply(`Reminder: ${args.get('description')}`), time);
    msg.reply(`Reminder set for ${time} from now.`);
  }
}
```

You can also extract the Arguments and re-use the declarations in other commands to keep things clean.

## Registering Commands

Registering any command with your bot only requires adding it to your client:
```js
// Register them one at a time
client.registerCommand(new ReminderCommand());
// If you place all your commands in a directory, you can load them all at once
client.registerCommandDirectory('./commands');
```
