import { OrderRepository } from "../../Repositories/OrderRepository/OrderRepository";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { ProductInOrderRepository } from "../../Repositories/ProductsInOrdersRepository/ProductInOrderRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const orderRepository = new OrderRepository()
const productRepository = new ProductRepository()
const productInOrderRepository = new ProductInOrderRepository()

const createOrderUseCase = new CreateOrderUseCase(orderRepository, productRepository, productInOrderRepository)
const createOrderController = new CreateOrderController(createOrderUseCase)

export { createOrderController }