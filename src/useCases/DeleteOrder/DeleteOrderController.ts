import { Request, Response } from "express";
import { DeleteOrderUseCase } from "./DeleteOrderUseCase";

export class DeleteOrderController{
    constructor(private deleteOrderUseCase : DeleteOrderUseCase){}

    async handle(request: Request, response: Response){
        const { id } : { id: string } = request.body

        try{
            await this.deleteOrderUseCase.execute(id)
            response.json({ message: 'Produto Excluído com sucesso!' })
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao excluir pedido!', error: error.message })
        }
    }
}