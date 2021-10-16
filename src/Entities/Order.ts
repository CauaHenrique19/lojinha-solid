import { v4 as uuid_v4 } from 'uuid'
import { Product } from './Product'

export class Order{
    public readonly id?: string
    public total: number
    public readonly created_at: Date
    public products?: Product[]

    constructor(props: Omit<Order, 'id' | 'products'>, id?: string, products?: Product[]){
        Object.assign(this, props)

        if(!id){
            this.id = uuid_v4()
        }

        if(products){
            this.products = products
        }
    }
}