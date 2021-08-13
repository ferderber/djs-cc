import { Config } from "../config";

export const config: Config = {
  provider: "better-sqlite3",
  host: "localhost",
  db_name: "bot",
  username: "testUser", // Not used for sqlite
  password: "testPassword", // Not used for sqlite
};

export default config;
