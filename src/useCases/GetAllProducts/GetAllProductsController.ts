import { Request, Response } from "express";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

export class GetAllProductsController{
    constructor(private getAllProductsUseCase : GetAllProductsUseCase){}

    async handle(request: Request, response: Response) : Promise<void> {
        try{
            const products = await this.getAllProductsUseCase.handle();
            response.json(products)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao listar produtos!', error: error.message })
        }
    }
}