export interface IFile {
  name: string
  size: number
  type: string
  content: ArrayBuffer
}

export interface IUpdateFile{
  key: string
  name: string
  size: number
  type: string
  content: ArrayBuffer
}

export interface IUploadedFile {
  Location: string
  Key: string
}

export interface FileUploader {
  upload: (files: IFile) => Promise<IUploadedFile>
  update: (file: IUpdateFile) => Promise<void>
}