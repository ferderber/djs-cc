/**
 * Exports the default commands
 */
import HelpCommand = require("./help");
import StatusCommand = require("./status");
import PingCommand = require('./ping');

export = [
    HelpCommand,
    StatusCommand,
    PingCommand
];