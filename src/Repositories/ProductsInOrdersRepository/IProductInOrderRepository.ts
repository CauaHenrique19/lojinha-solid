import { ProductInOrder } from "../../Entities/ProductInOrder";

export interface IProductInOrderRepository{
    save(productsInOrders: ProductInOrder[]) : Promise<void>
    delete(orderId: string) : Promise<void>
}