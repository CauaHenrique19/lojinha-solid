import { v4 as uuid_v4 } from 'uuid'

export class ProductInOrder{
    public id ?: string
    public product_id: string
    public order_id: string

    constructor(props: Omit<ProductInOrder, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid_v4()
        }
    }
}