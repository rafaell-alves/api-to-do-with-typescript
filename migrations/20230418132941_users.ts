import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users',(table)=>{
        table.increments('id').primary();
        table.string('first_name',150).notNullable();
        table.string('last_name',150);
        table.string('user_name',150).notNullable().unique();
        table.string('email',255).notNullable().unique();
        table.string('password_hash',255).notNullable().unique();
        table.tinyint('status',2).notNullable();
        table.timestamps(true,true);
        
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
}

