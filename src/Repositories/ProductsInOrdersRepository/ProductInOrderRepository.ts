import knex from '../../database/connection'
import { ProductInOrder } from "../../Entities/ProductInOrder";
import { IProductInOrderRepository } from "./IProductInOrderRepository";

export class ProductInOrderRepository implements IProductInOrderRepository {
    async save(productsInOrders : ProductInOrder[]) : Promise<void> {
        await knex('products_in_orders')
            .insert(productsInOrders)
    }

    async delete(orderId: string) : Promise<void>{
        await knex('products_in_orders')
            .delete()
            .where({ order_id: orderId })
    }
}