import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Setting } from './Setting';

@Entity('guild')
export class Guild {
    @PrimaryColumn('string')
    id: string;
    @OneToMany(type => Setting, setting => setting.guild)
    settings: Setting[] = [];
}