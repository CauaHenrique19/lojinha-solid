import { Request, Response } from "express";
import { IUpdateFile } from "../../Providers/IFileUpload";
import { IUpdateProductDTO } from "./IUpdateProductDTO";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController{
    constructor(private updateProductUseCase : UpdateProductUseCase){}

    async handle(request: Request, response: Response) : Promise<void> {
        const product : IUpdateProductDTO = request.body
        const file : IUpdateFile = {
            content: request.file.buffer,
            name: request.file.filename,
            size: request.file.size,
            key: product.key_image,
            type: request.file.mimetype
        }

        try{
            const updatedProduct = await this.updateProductUseCase.execute(product, file)
            response.json(updatedProduct)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao atualizar produto!', error: error.message })
        }
    }
}