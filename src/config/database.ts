import  Knex  from "knex";
import config from "../../knexfile";
// Update with your config settings.
const database = Knex(config.development);
export default database;
