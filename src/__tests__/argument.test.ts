/**
 * Disabled this test file as it breaks after the Discord.js v12 upgrade. Requires mocking the discord.js client fully.
 * GuildMemberManager is used instead of a member collection now.
 */
// const memberManager = new GuildMemberManager( {client, guild: { client }}, [
//     { id: "125385861117378563", displayName: 'Cobalt', user: { username: "Cobalt" } },
//     { id: "321", displayName: 'testuser', user: { username: "testuser" } }
// ]);

import { Argument, Message } from "..";
import { ArgumentType } from "../argumentType";
import { guild } from "./__mocks__/guild";

const message: Message = {
  content: "!test 500",
  // value: "500",
  guild: guild,
  // members: new GuildMemberManager(new Guild(null, [
  //     { "125385861117378563",
  //     { displayName: "Cobalt", user: { username: "Cobalt" } },
  //   ],
  //   ["321", { displayName: "testuser", user: { username: "testuser" } }],
  // ]),
  // }),
} as Message;

//Mentions are converted into id so the tests will use the converted form
//https://discordapp.com/developers/docs/resources/channel#message-formatting

xdescribe("Argument", () => {
  test("ParseArg: Converting", async () => {
    const arg = new Argument({
      name: "test",
      type: ArgumentType.User,
      required: true,
    });
    expect(await arg.parseArg("value", message)).toEqual("value");
  });

  test("ParseArg: Number", async () => {
    const arg = new Argument({
      name: "test2",
      type: ArgumentType.Integer,
      required: true,
    });
    expect(await arg.parseArg("55", message)).toBe(55);
  });

  test("ParseArg: Float", async () => {
    const arg = new Argument({
      name: "test3",
      type: ArgumentType.Float,
      required: true,
    });
    expect(await arg.parseArg("55.34111", message)).toBe(55.34111);
    try {
      await arg.parseArg("abc", message);
    } catch (e) {
      expect(e).toEqual(
        new Error("Converting provided argument (`abc`) `test3` to Float")
      );
    }
  });
  test("ParseArg: User", async () => {
    const arg = new Argument({
      name: "test",
      type: ArgumentType.User,
      required: true,
    });
    expect(await arg.parseArg("<@125385861117378563>", message)).toEqual(
      message?.guild?.members?.cache?.first()?.user
    );
  });
  test("ParseArg: User string", async () => {
    const arg = new Argument({
      name: "test",
      type: ArgumentType.User,
      required: true,
    });
    expect(await arg.parseArg("Cobalt", message)).toEqual(
      message?.guild?.members?.cache?.first()?.user
    );
  });

  test("ParseArg: invalid user", async () => {
    const arg = new Argument({
      name: "test",
      type: ArgumentType.User,
      required: true,
    });
    try {
      await arg.parseArg("someString", message);
    } catch (e) {
      expect(e).toEqual(
        new Error("Provided argument for `test` is not a reference to a user")
      );
    }
  });

  test("ParseArg: Unknown user", async () => {
    const arg = new Argument({
      name: "test",
      type: ArgumentType.User,
      required: true,
    });
    arg.parseArg("<@123>", message);
    try {
      await arg.parseArg("<@123>", message);
    } catch (e) {
      expect(e).toEqual(new Error("Could not find user for argument `test`"));
    }
  });
});
