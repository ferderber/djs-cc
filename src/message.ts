import { Message as DiscordMessage } from "discord.js";
import { RawMessageData } from "discord.js/typings/rawDataTypes";
import { Client } from "./client";

/**
 * Extended version of the discord.js Message class (overwrites Client)
 */
export class Message extends DiscordMessage {
  readonly client: Client;
  constructor(client: Client, data: RawMessageData) {
    super(client, data);
    this.client = client;
  }
}
