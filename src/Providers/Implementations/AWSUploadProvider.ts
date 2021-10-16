import { S3 } from 'aws-sdk'
import crypto from 'crypto'
import { FileUploader, IFile, IUpdateFile, IUploadedFile } from '../IFileUpload';

export class AWSUploadProvider implements FileUploader{
    private client: S3;

    constructor(){
        this.client = new S3()
    }

    async upload(file: IFile) : Promise<IUploadedFile>{
        const uploadedFile = await this.uploadFile(file)
        return uploadedFile
    }

    async update(file: IUpdateFile) : Promise<void>{
        await this.updateFile(file)
    }

    async delete(key: string) : Promise<void>{
        await this.deleteFile(key)
    }

    private generateFileKey(file: IFile, hash: string){
        return `${hash}-${file.name}`
    }

    private async uploadFile(file: IFile) : Promise<IUploadedFile> {
        const hash = crypto.randomBytes(16).toString('hex')
        const fileKey = this.generateFileKey(file, hash)

        const { Key, Location } : IUploadedFile = await this.client
            .upload({ 
                Bucket: 'aleatshop', 
                Key: fileKey, 
                ContentType: file.type, 
                Body: file.content, 
                ACL: 'public-read' 
            })
            .promise()

        return { Key, Location }
    }

    private async updateFile(file: IUpdateFile) : Promise<void>{
        await this.client.putObject({
            Bucket: 'aleatshop',
            Key: file.key,
            ContentType: file.type,
            Body: file.content,
            ACL: 'public-read'
        })
        .promise()
    }

    private async deleteFile(key: string) : Promise<void>{
        await this.client.deleteObject({ 
            Bucket: 'aleatshop', 
            Key: key 
        })
        .promise()
    }
}