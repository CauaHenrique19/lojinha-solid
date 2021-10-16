import { OrderRepository } from "../../Repositories/OrderRepository/OrderRepository";
import { ProductInOrderRepository } from "../../Repositories/ProductsInOrdersRepository/ProductInOrderRepository";
import { DeleteOrderController } from "./DeleteOrderController";
import { DeleteOrderUseCase } from "./DeleteOrderUseCase";

const orderRepository = new OrderRepository()
const productInOrderRepository = new ProductInOrderRepository()
const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository, productInOrderRepository)
const deleteOrderController = new DeleteOrderController(deleteOrderUseCase)

export { deleteOrderController }