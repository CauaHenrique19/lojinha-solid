import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const productRepository = new ProductRepository()
const awsUploadProvider = new AWSUploadProvider()

const createProductUseCase = new CreateProductUseCase(productRepository, awsUploadProvider)
const createProductController = new CreateProductController(createProductUseCase)

export { createProductController }