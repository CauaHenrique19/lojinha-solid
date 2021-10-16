import { Product } from "../../Entities/Product";

export interface IProductRepository{
    getAll() : Promise<Product[]>
    findProductsById(ids: string[]): Promise<Product[]>
    save(product: Product) : Promise<Product>
    update(product: Product) : Promise<Product>
    delete(id: string) : Promise<void>
}