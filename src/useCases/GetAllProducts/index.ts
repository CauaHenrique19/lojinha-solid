import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { GetAllProductsController } from "./GetAllProductsController";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

const productRepository = new ProductRepository()
const getAllProductsUseCase = new GetAllProductsUseCase(productRepository)
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)

export { getAllProductsController }