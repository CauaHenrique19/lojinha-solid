import { Order } from '../../Entities/Order'
import { ProductInOrder } from '../../Entities/ProductInOrder'
import { OrderRepository } from "../../Repositories/OrderRepository/OrderRepository";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { ProductInOrderRepository } from '../../Repositories/ProductsInOrdersRepository/ProductInOrderRepository';
import { IReturnCreateOrderDTO } from './IReturnCreateOrderDTO';

export class CreateOrderUseCase{
    constructor(
        private orderRepository : OrderRepository,
        private productRepository: ProductRepository,
        private productInOrderRepository: ProductInOrderRepository
    ){}

    async execute(ids: string[]) : Promise<IReturnCreateOrderDTO>{
        const products = await this.productRepository.findProductsById(ids)
        const total = products.reduce((accumulator, actual) => accumulator + actual.price, 0)
        const now = new Date()

        const order = new Order({ total, created_at: now })
        const returnedOrder = await this.orderRepository.save(order)

        const productsInOrders = products.map(product => new ProductInOrder({ product_id: product.id, order_id: returnedOrder.id }))
        await this.productInOrderRepository.save(productsInOrders)

        const finalOrder : IReturnCreateOrderDTO = {
            id: returnedOrder.id,
            total: returnedOrder.total,
            created_at: returnedOrder.created_at,
            products: products
        }

        return finalOrder
    }
}