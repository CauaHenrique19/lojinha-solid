import knex from "../../database/connection";
import { Product } from "../../Entities/Product";
import { IProductRepository } from "./IProductRepository";

export class ProductRepository implements IProductRepository {
    async getAll() : Promise<Product[]> {
        const products = await knex('products')
            .select('*')

        return products
    }

    async findProductsById(ids: string[]) : Promise<Product[]>{
        const products = await knex('products')
            .select('*')
            .whereIn('id', ids)

        return products
    }

    async save(product: Product) : Promise<Product> {
        const [productDB] = await knex('products')
            .insert(product, '*')

        return productDB
    }

    async update(product: Product) : Promise<Product> {
        const [productUpdated] = await knex('products')
            .update(product, '*')
            .where({ id: product.id })

        return productUpdated
    }

    async delete(id: string) : Promise<void>{
        await knex('products')
            .delete()
            .where({ id })
    }
}