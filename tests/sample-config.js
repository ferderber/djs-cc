var config = {
    "storage": "./test.db",
    "provider": "sqlite",
    "host": "localhost",
    "db_name": "bot", //Not used for sqlite
    "username": "testUser", //Not used for sqlite
    "password": "testPassword", //Not used for sqlite
    discordToken: process.env.DISCORD_BOT_TOKEN,
};
module.exports = config;
