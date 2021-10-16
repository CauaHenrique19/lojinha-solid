import knex from '../../database/connection'
import { Order } from '../../Entities/Order';
import { Product } from '../../Entities/Product';
import { IOrderRepository } from "./IOrderRepository";

export class OrderRepository implements IOrderRepository{
    async getAll() : Promise<Order[]> {
        const orders : Order[] = await knex('orders')
            .select('*')

        for(const order of orders){
            const productsOrder : Product[] = await knex('products_in_orders')
                .select('products.*')
                .join('products', 'products_in_orders.product_id', 'products.id')
                .where({ order_id: order.id })

            order.products = productsOrder
        }

        return orders
    }
    
    async save(order: Order) : Promise<Order>{
        const [orderDB] = await knex('orders')
            .insert(order, '*')

        return orderDB
    }

    async delete(id: string) : Promise<void>{
        await knex('orders')
            .delete()
            .where({ id })
    }
}