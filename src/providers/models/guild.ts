import { Entity, PrimaryColumn, OneToMany } from "typeorm";
import Setting from "./setting";

@Entity("guild")
export default class Guild {
  @PrimaryColumn()
  id!: string;
  @OneToMany(() => Setting, (setting) => setting.guild)
  settings!: Setting[];
}
