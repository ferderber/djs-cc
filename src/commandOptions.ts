import Argument = require('./Argument');
import { Role } from 'discord.js';

/**
 * Options interface used to construct a command
 */
interface CommandOptions {
    name: string;
    aliases?: string[];
    description?: string;
    args?: Argument[];
    usage: string;
    requiredRole?: Role;
}
export = CommandOptions;