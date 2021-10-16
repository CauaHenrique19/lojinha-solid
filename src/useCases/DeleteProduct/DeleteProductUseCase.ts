import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";

export class DeleteProductUseCase{
    constructor(
        private productRepository: ProductRepository,
        private awsUploadProvider: AWSUploadProvider
    ){}

    async execute(id: string, key: string) : Promise<void>{
        await this.awsUploadProvider.delete(key)
        await this.productRepository.delete(id)
    }
}