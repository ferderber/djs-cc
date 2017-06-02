interface Config {
    db_name: string,
    host: string | 'localhost',
    provider: 'sqlite' | 'mssql' | 'postgres' | 'mariadb' | 'mysql',
    storage: string,
    username: string,
    password: string
}
export = Config