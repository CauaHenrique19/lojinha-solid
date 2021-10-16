import { Request, Response } from "express";
import { IFile } from "../../Providers/IFileUpload";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { ICreateProductDTO } from "./ICreateProductDTO";

export class CreateProductController{
    constructor(private createProductUseCase : CreateProductUseCase){}

    async handle(request: Request, response: Response) : Promise<void>{
        const product : ICreateProductDTO = request.body
        const file : IFile = {
            name: request.file.originalname,
            size: request.file.size,
            content: request.file.buffer,
            type: request.file.mimetype
        }

        try{
            const returnedProduct = await this.createProductUseCase.execute(product, file)
            response.json(returnedProduct)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao criar produto!!', error: error.message })
        }
    }
}