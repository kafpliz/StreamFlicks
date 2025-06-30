export interface IHeaderDialogParams {
    ftype?: string,
    fq?: string
}

export interface IHeaderSearchResponce {
    statusCode: number,
    data: any
    props: {
        count: number,
        total: number,
        page: number,
        pages: number
    }
}

export interface IHeaderSearchCardMovie {
    id: number
    name: string
    altName: string
    poster: string
    rating: number
    type?: {
        name?: string
    }
    genres: {
        id: number
        name: string
    }[]
}

export interface IHeaderSearchCardPerson {
    id: number
    name?: string
    enName?: string
    img?: string
    profession?: string[]
}
export interface IHeaderSearchCardUser {
    id: number
    name: string
    lastName?: string
    photo?: string
    description:string
  
}