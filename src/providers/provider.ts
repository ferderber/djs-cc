import { Connection, createConnection } from "typeorm";
import { Config } from "../config";
import { Guild, Setting } from "./models";

/**
 * All settings providers implement Provider
 */
export default abstract class Provider {
  db: Connection;

  constructor(connection: Connection) {
    this.db = connection;
  }

  static async setup(config: Config): Promise<Connection> {
    return await createConnection({
      type: config.provider,
      database: config.db_name + ".db",
      synchronize: true,
      logging: true,
      entities: [Guild, Setting],
    });
  }
  abstract get(property: string, guildId?: string): Promise<string | null>;
  abstract getAll(guildId?: string): Promise<Setting[]>;
  abstract delete(property: string, guildId?: string): Promise<Setting | void>;
  abstract deleteAll(guildId: string): Promise<Setting[]>;
  abstract set(
    property: string,
    value: string,
    guildId?: string
  ): Promise<Setting>;
}
