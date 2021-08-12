import { Intents } from "discord.js";
import { Client } from ".";
// import path from 'path';

(async () => {
  const client = new Client([
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]);
  client.on("ready", () => {
    console.log("Ready to start processing commands!");
  });
  // client.registerCommandDirectory(path.join(__dirname, './commands'));

  console.log("Logging in...");
  await client.login(process.env.DISCORD_BOT_TOKEN);
  console.log("Logged in!");
})();
