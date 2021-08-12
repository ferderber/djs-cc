/**
 * Interface for client config files
 */
export interface Config {
  db_name: string;
  host: string | "localhost";
  provider: "sqlite" | "mssql" | "postgres" | "mariadb" | "mysql";
  username: string;
  password: string;
  discordToken?: string;
}
