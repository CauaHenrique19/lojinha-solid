import { Order } from "../../Entities/Order";
import { OrderRepository } from "../../Repositories/OrderRepository/OrderRepository";

export class GetAllOrdersUseCase{
    constructor(private orderReposiry : OrderRepository){}

    async execute() : Promise<Order[]> {
        const orders = await this.orderReposiry.getAll()
        return orders
    }
}