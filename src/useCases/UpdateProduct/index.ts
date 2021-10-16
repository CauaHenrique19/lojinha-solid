import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const productRepository = new ProductRepository()
const awsUploadProvider = new AWSUploadProvider

const updateProductUseCase = new UpdateProductUseCase(productRepository, awsUploadProvider)
const updateProductController = new UpdateProductController(updateProductUseCase)

export { updateProductController }