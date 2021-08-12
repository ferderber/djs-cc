import { Client, Guild, GuildMemberManager } from "discord.js";
import { members } from "./members";

export const guild: Guild = {
  members: new GuildMemberManager(
    { id: "123", client: new Client({ intents: "DIRECT_MESSAGES" }) } as Guild,
    members
  ),
} as Guild;
