import { Product } from "../../Entities/Product";
import { IFile, IUploadedFile } from "../../Providers/IFileUpload";
import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { IProductRepository } from "../../Repositories/ProductRepository/IProductRepository";
import { ICreateProductDTO } from "./ICreateProductDTO";

export class CreateProductUseCase{
    constructor(
        private productRepository: IProductRepository,
        private awsUploadProvider: AWSUploadProvider
    ){}

    async execute(product : ICreateProductDTO, file: IFile) : Promise<Product> {
        const { Key, Location } : IUploadedFile = await this.awsUploadProvider.upload(file)
        product.key_image = Key
        product.image_url = Location

        const productEntity = new Product(product)
        const returnedProduct = await this.productRepository.save(productEntity)

        return returnedProduct
    }
}