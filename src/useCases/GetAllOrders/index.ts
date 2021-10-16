import { OrderRepository } from "../../Repositories/OrderRepository/OrderRepository";
import { GetAllOrdersController } from "./GetAllOrdersController";
import { GetAllOrdersUseCase } from "./GetAllOrdersUseCase";

const orderReposiry = new OrderRepository()
const getAllOrdersUseCase = new GetAllOrdersUseCase(orderReposiry)
const getAllOrdersController = new GetAllOrdersController(getAllOrdersUseCase)

export { getAllOrdersController }