import { Knex } from "knex";

export async function up(knex: Knex) {
    await knex.schema.createTable('orders', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.float('total').notNullable()
        table.timestamp('created_at').notNullable()
    })
};

export async function down(knex: Knex) {
    await knex.schema.dropTable('orders')
};