import { Product } from "../../Entities/Product";
import { IUpdateFile } from "../../Providers/IFileUpload";
import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";
import { IUpdateProductDTO } from "./IUpdateProductDTO";

export class UpdateProductUseCase{
    constructor(
        private productRepository : ProductRepository,
        private awsUploadProvider : AWSUploadProvider
    ){}

    async execute(product: IUpdateProductDTO, file: IUpdateFile) : Promise<Product> {
        await this.awsUploadProvider.update(file)
        const updatedProduct = await this.productRepository.update(product)
        return updatedProduct
    }
}