import Discord = require('discord.js');
import Client = require('./Client');
/**
 * Extended version of the discord.js Message class (overwrites Client)
 */
class Message extends Discord.Message {
    client: Client;
}
export = Message;