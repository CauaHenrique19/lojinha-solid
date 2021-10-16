import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('products', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('name').notNullable()
        table.float('price').notNullable()
        table.text('description').notNullable()
        table.string('key_image').notNullable()
        table.string('image_url').notNullable()
    })
};

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('products')
};