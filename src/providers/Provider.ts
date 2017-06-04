/*
    All settings providers implement Provider
*/
interface Provider {
    setup(options?: any): Promise<any>,
    get(property: string, guildId?: string): Promise<string>,
    getAll(guildId?: string): Promise<any[]>,
    delete(property: string, guildId?: string): Promise<any>,
    deleteAll(guildId: string): Promise<any>,
    set(property: string, value: string, guildId?: string): void
}
export = Provider