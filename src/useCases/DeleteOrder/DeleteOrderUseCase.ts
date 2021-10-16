import { OrderRepository } from "../../Repositories/OrderRepository/OrderRepository";
import { ProductInOrderRepository } from "../../Repositories/ProductsInOrdersRepository/ProductInOrderRepository";

export class DeleteOrderUseCase{
    constructor(
        private orderRepository : OrderRepository,
        private productInOrderRepository : ProductInOrderRepository
    ){}

    async execute(id: string) : Promise<void>{
        await this.productInOrderRepository.delete(id)
        await this.orderRepository.delete(id)
    }
}