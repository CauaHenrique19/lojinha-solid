import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController{
    constructor(private createOrderUseCase : CreateOrderUseCase){}

    async handle(request: Request, response: Response){
        const { products_id } = request.body
        
        try{
            const returnedOrder = await this.createOrderUseCase.execute(products_id)
            response.json(returnedOrder)
        }
        catch(error){
            return response.status(400).json({ message: 'Ocorreu um erro ao realizar pedido!', error: error.message })
        }
    }
}