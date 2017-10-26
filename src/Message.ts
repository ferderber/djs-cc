import Discord = require('discord.js');
import { Client } from './Client';
// declare class Message;

/**
 * Extended version of the discord.js Message class (overwrites Client)
 */
export class Message extends Discord.Message {
    client : Client
}