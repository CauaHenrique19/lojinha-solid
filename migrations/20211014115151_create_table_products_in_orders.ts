import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('products_in_orders', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('product_id').references('id').inTable('products').notNullable()
        table.string('order_id').references('id').inTable('orders').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('products_in_orders')
}