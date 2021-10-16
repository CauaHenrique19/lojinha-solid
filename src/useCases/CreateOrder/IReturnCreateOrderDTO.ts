import { Product } from "../../Entities/Product";

export interface IReturnCreateOrderDTO{
    id ?: string
    total ?: number
    created_at ?: Date
    products: Product[]
}