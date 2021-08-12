import {
  BitFieldResolvable,
  Client as DiscordClient,
  IntentsString,
  Interaction,
  Message as DiscordMessage,
} from "discord.js";

import { Config } from "./config";
import { Provider, SQLProvider } from "./providers";
import { Command } from "./command";
import { Message } from "./message";
import { HelpCommand, PingCommand, StatusCommand } from "./commands";
import { getCommandsFromDirectory } from "./_helpers";

export class Client extends DiscordClient {
  commands: Map<string, Command> = new Map();
  prefix = "!";
  public settings?: Provider;
  constructor(intents: BitFieldResolvable<IntentsString, number>[]) {
    super({ intents });
    this.registerCommands([
      new HelpCommand(),
      new PingCommand(),
      new StatusCommand(),
    ]);
    this.on("messageCreate", this.onMessage);
    this.on("interactionCreate", this.onInteraction);
  }

  // TODO: Implement proper interaction handling (same as onMessage likely)
  async onInteraction(interaction: Interaction): Promise<void> {
    if (!interaction.isCommand()) return;
    // const command = this.commands.get(interaction.commandName);
  }

  /**
   * @param msg Any message seen by the bot
   */
  async onMessage(message: DiscordMessage): Promise<void> {
    if (message.content.indexOf(this.prefix) !== 0) return;
    const argStrings = message.content.split(" ");
    const cmdString = argStrings[0].substring(1).toLowerCase();

    const msg = <Message>message; //Cast to custom Message wrapper
    Object.defineProperty(msg, "client", { value: this });

    // If the command ends with a ? return help message
    if (cmdString.charAt(cmdString.length - 1) === "?") {
      const cmd = this.commands.get(
        cmdString.substring(0, cmdString.length - 1)
      );
      if (cmd) {
        msg.reply({ embeds: [cmd.help(msg)] });
      }
    } else {
      const cmd = this.commands.get(cmdString);
      if (cmd) {
        if (cmd.hasPermission === undefined || cmd.hasPermission(msg)) {
          let args;
          try {
            args = await cmd.parseArgs(msg);
          } catch (e) {
            msg.reply(`Error: ${e.message}`);
          }
          if (args) {
            try {
              await cmd.run(msg, args);
            } catch (e) {
              msg.reply(`An error occured: ${e.message}`);
            }
          }
        } else {
          msg.reply(
            `You do not have permission to use \`${this.prefix}${cmd.name}\``
          );
        }
      } else {
        msg.reply(`Unknown command. Try \`${this.prefix}help\``);
      }
    }
  }
  /**
   * Registers a command.
   * @param cmd Instance of a command
   */
  registerCommand(cmd: Command): void {
    this.commands.set(cmd.name.toLowerCase(), cmd);
    if (cmd.aliases) {
      cmd.aliases.forEach((alias) =>
        this.commands.set(alias.toLowerCase(), cmd)
      );
    }
  }
  /**
   * Registers an array of command classes as commands.
   * @param cmds Array of command classes
   */
  // registerCommands<T extends Command>(cmds: (new () => T)[]): void {
  registerCommands(cmds: Command[]): void {
    cmds.forEach((cmd) => {
      this.registerCommand(cmd);
    });
  }

  /**
   * Registers all commands within the given directory
   * @param path Path to the directory containing commands
   */
  async registerCommandDirectory(path: string): Promise<void> {
    try {
      this.registerCommands(await getCommandsFromDirectory(path));
    } catch (err) {
      console.error(
        "An error occured while loading commands from a directory:" + err
      );
    }
  }

  /**
   * Removes a command from the bots command Map
   * @param cmd Instance of a command
   */
  unregisterCommand(cmd: Command): void {
    this.commands.delete(cmd.name);
  }
  /**
   * Sets the clients configuration provider
   * @param config
   */
  async registerProvider(config: Config): Promise<void> {
    const connection = await Provider.setup(config);
    this.settings = new SQLProvider(connection);
  }
}
