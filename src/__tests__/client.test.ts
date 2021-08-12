import { Intents } from "discord.js";
import { Client, SQLProvider } from "..";
import { ArgumentCollection } from "../argument";
import { Message } from "../message";
import SampleCommand from "./commands/sampleCommand";
import config from "./sample-config";
import { guild } from "./__mocks__/guild";

const bot = new Client([Intents.FLAGS.GUILD_MESSAGES]);
let numDefaultCommands = bot.commands.size;

class ErrorCommand extends SampleCommand {
  constructor() {
    super();
    this.name = "err";
    this.args = [];
  }
  async run(): Promise<ArgumentCollection> {
    throw new Error("sample text");
  }
}
const fakeMsg: Message = {
  content: "!test 500",
  author: { id: "125385861117378563", username: "Cobalt" },
  guild: guild,
} as Message;

const reply =
  (expectedMessage: string) =>
  async (str: string): Promise<Message> => {
    expect(str).toEqual(expectedMessage);
    return { content: "abc" } as Message;
  };

describe("Client", () => {
  beforeEach(async () => {
    bot.registerCommand(new SampleCommand());
    numDefaultCommands = bot.commands.size;
  });

  test("Valid command usage", async () => {
    fakeMsg.reply = reply(`argument sampleArg was: 500`);
    await bot.onMessage(fakeMsg); //Simulate message
  });

  test("Valid help command usage", async () => {
    fakeMsg.content = "!test?";
    fakeMsg.reply = async (obj) => {
      expect(obj).toBeInstanceOf(Object);
      return {} as Message;
    };
    await bot.onMessage(fakeMsg);
  });

  test("Non existent command", async () => {
    fakeMsg.content = "!unknowncommand";
    fakeMsg.reply = reply("Unknown command. Try `!help`"); //Expected message for unknown command
    await bot.onMessage(fakeMsg);
  });

  test("Error in command", async () => {
    fakeMsg.content = "!test @aaa";
    fakeMsg.reply = reply(
      "Error: Converting provided argument (`@aaa`) `sampleArg` to Integer"
    );
    await bot.onMessage(fakeMsg);
  });

  test("Non permitted user", async () => {
    fakeMsg.author.username = "OtherUser"; //invalid user (not permitted)
    fakeMsg.content = "!test 50"; //valid usage
    fakeMsg.reply = reply("You do not have permission to use `!test`");
    await bot.onMessage(fakeMsg);
  });

  test("command that throws error", async () => {
    // bot.unregisterCommand(new SampleCommand());
    bot.registerCommand(new ErrorCommand());
    fakeMsg.author.username = "Cobalt";
    fakeMsg.content = "!err";
    fakeMsg.reply = reply("An error occured: sample text");
    await bot.onMessage(fakeMsg);
  });

  test("registerProvider registers to settings property", () => {
    bot.registerProvider(config);
    expect(bot.settings).toBeInstanceOf(SQLProvider);
  });

  test("registerCommandDirectory valid", async () => {
    await bot.registerCommandDirectory(__dirname + "/commands");
    fakeMsg.author.username = "Cobalt";
    fakeMsg.content = "!ping";
    fakeMsg.reply = reply("Pong!");
    await bot.onMessage(fakeMsg);
  });

  test("registerCommandDirectory fail", async () => {
    await bot.registerCommandDirectory("fakePath");
    expect(bot.commands.size).toEqual(numDefaultCommands);
  });

  afterEach(async () => {
    await bot.destroy();
  });
});
