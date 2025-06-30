export interface ISignup {
    email: string
    firstName: string
    lastName: string
    password: string
    photo: File
}

export interface ILogin {
    email: string
    password: string
}

export interface ILoginRes {
    access?: string
    refresh?: string
    message?:string
    status?:number
}