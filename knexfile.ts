import type { Knex } from "knex";
import dotenv from 'dotenv';
dotenv.config();
const config: { [key: string]: Knex.Config } = {

  development: {
    client: "postgresql",
    connection: {
      host:process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      port:5432,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default config;
