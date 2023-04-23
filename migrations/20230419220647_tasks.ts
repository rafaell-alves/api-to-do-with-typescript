import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tasks',(table)=>{
        table.increments('id').primary();
        table.string('task_name',150).notNullable();
        table.text('description');
        table.timestamp("deadline").notNullable;
        table.integer('user_id').unsigned();
        table.tinyint('status',2).notNullable();
        table.timestamps(true,true);
        table.foreign('user_id').references('id').inTable('users')
        
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('tasks');
}

