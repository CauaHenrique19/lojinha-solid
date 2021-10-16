import { Product } from "../../Entities/Product";
import { ProductRepository } from "../../Repositories/ProductRepository/ProductRepository";

export class GetAllProductsUseCase{
    constructor(private productRepository : ProductRepository){}

    async handle() : Promise<Product[]>{
        const products = await this.productRepository.getAll()
        return products
    }
}