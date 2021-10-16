import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const awsUploadProvider = new AWSUploadProvider()
const productRepository = new ProductRepository()

const deleteProductUseCase = new DeleteProductUseCase(productRepository, awsUploadProvider)
const deleteProductController = new DeleteProductController(deleteProductUseCase)

export { deleteProductController }