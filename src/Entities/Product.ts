import { v4 as uuid_v4 } from 'uuid'

export class Product{
    public readonly id?: string
    public name: string
    public price: number
    public description: string
    public readonly key_image: string
    public image_url: string

    constructor(props: Omit<Product, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid_v4()
        }
    }
}