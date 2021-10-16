import { Request, Response } from "express";
import { GetAllOrdersUseCase } from "./GetAllOrdersUseCase";

export class GetAllOrdersController{
    constructor (private getAllOrdersUseCase : GetAllOrdersUseCase){}

    async handle(request: Request, response: Response) : Promise<void>{
        try{
            const orders = await this.getAllOrdersUseCase.execute()
            response.json(orders)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao buscar pedidos!', error: error.message })
        }
    }
}