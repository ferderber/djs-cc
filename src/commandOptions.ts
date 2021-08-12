import { Argument } from "./argument";
import { Role } from "discord.js";

/**
 * Options interface used to construct a command
 */
export interface CommandOptions {
  name: string;
  aliases?: string[];
  description?: string;
  args?: Argument[];
  usage: string;
  requiredRole?: Role;
}
