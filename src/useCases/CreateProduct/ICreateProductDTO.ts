import { IFile } from "../../Providers/IFileUpload";

interface ICreateProductDTO{
    name: string
    price: number
    description: string
    key_image: string
    image_url: string
    file: IFile
}

export { ICreateProductDTO }