import { Order } from "../../Entities/Order";

export interface IOrderRepository{
    getAll() : Promise<Order[]>
    save(order: Order) : Promise<Order>
    delete(id: string) : Promise<void>
}