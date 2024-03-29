import { SQLProvider } from "../providers";
import config from "./sample-config";
const defaultGuild = "125385898593484800";

config.db_name = "provider_tests";

let sqlClient: SQLProvider;

async function addBaseSettings() {
  await sqlClient.set("name1", "value", defaultGuild);
  await sqlClient.set("name2", "value", defaultGuild);
  await sqlClient.set("name3", "value", defaultGuild);
}
describe("Providers", () => {
  beforeAll(async () => {
    const db = await SQLProvider.setup(config);
    sqlClient = new SQLProvider(db);
    await sqlClient.deleteAll(defaultGuild);
  });
  beforeEach(async () => {
    await sqlClient.deleteAll(defaultGuild);
  });
  afterAll(async () => {
    await sqlClient.deleteAll(defaultGuild);
  });
  test("Add a setting", async () => {
    await sqlClient.set("name", "value", defaultGuild);
    const settings = await sqlClient.getAll(defaultGuild);
    expect(settings[0]).toMatchObject({ property: "name", value: "value" });
  });
  test("modify existing setting", async () => {
    await sqlClient.set("name", "value", defaultGuild);
    await sqlClient.set("name", "v", defaultGuild);
    const settings = await sqlClient.getAll(defaultGuild);
    expect(settings[0]).toMatchObject({ property: "name", value: "v" });
  });
  test("Remove a setting", async () => {
    await sqlClient.set("name", "value", defaultGuild);
    const setting = await sqlClient.delete("name", defaultGuild);
    expect(setting).toMatchObject({ property: "name", value: "value" });
  });
  test("get all settings", async () => {
    await addBaseSettings();
    let settings = await sqlClient.getAll(defaultGuild);
    await expect(settings).toMatchObject([
      { property: "name1", value: "value" },
      { property: "name2", value: "value" },
      { property: "name3", value: "value" },
    ]);
    await sqlClient.deleteAll(defaultGuild);
    settings = await sqlClient.getAll(defaultGuild);
    expect(settings).toEqual([]);
  });
  test("delete all on empty", async () => {
    const res = await sqlClient.deleteAll("abc");
    expect(res).toEqual([]);
  });
  test("get one value", async () => {
    await sqlClient.set("name", "value", defaultGuild);
    const value = await sqlClient.get("name", defaultGuild);
    expect(value).toBe("value");
  });
  test("get no value", async () => {
    expect(await sqlClient.get("name", defaultGuild)).toEqual(null);
  });
});
