import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Guild from "./guild";

@Entity("setting")
export default class Setting {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  property!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Guild, (guild) => guild.settings)
  guild!: Guild;
}
