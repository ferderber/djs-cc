let CommandClient;
try {
    CommandClient = require('./build');
    const client = new CommandClient.Client();
    client.login(process.env.DISCORD_BOT_TOKEN);
} catch (e) {
    console.error('Build djs-cc with npm run build before running this sample! (or use npm run start)');
}