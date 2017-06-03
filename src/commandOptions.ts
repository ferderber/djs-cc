import Argument = require('./argument');
import { Role } from 'discord.js';

interface CommandOptions {
    name: string;
    aliases?: string[];
    description?: string;
    args?: Argument[];
    usage: string;
    requiredRole?: Role;
}
export = CommandOptions;