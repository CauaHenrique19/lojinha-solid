import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController{
    constructor(private deleteProductUseCase: DeleteProductUseCase){}

    async handle(request: Request, response: Response){
        const { id, key } = request.body

        try{
            await this.deleteProductUseCase.execute(id, key)
            response.json({ message: 'Produto excluído com sucesso!' })
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao excluir produto!', error: error.message })
        }
    }
}