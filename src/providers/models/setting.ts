import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Guild } from './guild';

@Entity('setting')
export class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    property: string

    @Column()
    value: string

    @ManyToOne(type => Guild, guild => guild.settings)
    guild: Guild;
}