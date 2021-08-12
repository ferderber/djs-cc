import "reflect-metadata";
import Provider from "./provider";
import { Guild, Setting } from "./models";
export default class SQLProvider extends Provider {
  /**
   * Retrieves the settings value of a property
   * @param property Key value to get
   * @param guildId Guild to retrieve the setting from
   */
  async get(property: string, guildId: string): Promise<string | null> {
    const setting = await this.db
      .getRepository(Setting)
      .createQueryBuilder("setting")
      .where("setting.guild=:guild", { guild: guildId })
      .andWhere("setting.property=:property", { property: property })
      .getOne();
    if (setting) {
      return setting.value;
    }
    return null;
  }

  /**
   * Retrieves all settings for a guild
   * @param guildId
   */
  async getAll(guildId: string): Promise<Setting[]> {
    const guild = await this.db
      .getRepository(Guild)
      .findOne(guildId, { relations: ["settings"] });
    if (guild && guild.settings) {
      return guild.settings;
    } else {
      return [];
    }
  }

  /**
   * Removes a setting from a guild
   * @param property Key value of the setting to be removed
   * @param guildId Id of the guild to remove from
   */
  async delete(property: string, guildId: string): Promise<Setting | void> {
    const guild = await this.db
      .getRepository(Guild)
      .findOne(guildId, { relations: ["settings"] });
    if (guild) {
      const setting = guild?.settings?.find(
        (setting) => setting.property === property
      );
      if (setting) return await this.db.getRepository(Setting).remove(setting);
    }
  }

  /**
   * Deletes all settings from a guild
   * @param guildId Id of the guild to remove from
   */
  async deleteAll(guildId: string): Promise<Setting[]> {
    const guild = await this.db
      .getRepository(Guild)
      .findOne(guildId, { relations: ["settings"] });
    if (guild) {
      return await this.db.getRepository(Setting).remove(guild.settings);
    }
    return [];
  }

  /**
   * Creates/Modifies a guild setting
   * @param property Key value to set
   * @param value
   * @param guildId Id of the guild to add a setting to
   */
  async set(
    property: string,
    value: string,
    guildId: string
  ): Promise<Setting> {
    let guild = await this.db
      .getRepository(Guild)
      .findOne(guildId, { relations: ["settings"] });
    if (!guild) {
      guild = new Guild();
      guild.id = guildId;
      guild.settings = [];
    }
    const settingIndex = guild.settings.findIndex(
      (setting) => setting.property === property
    );
    let setting = guild.settings[settingIndex];
    if (!setting) {
      setting = new Setting();
      setting.property = property;
    }
    setting.value = value;
    setting.guild = guild;
    if (settingIndex !== -1) {
      guild.settings[settingIndex] = setting;
    } else {
      guild.settings.push(setting);
    }
    await this.db.getRepository(Guild).save(guild);
    return await this.db.getRepository(Setting).save(setting);
  }
}
