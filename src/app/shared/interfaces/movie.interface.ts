export interface IMovie {
    id: number
    id_kp:number
    name: string
    altName: string
    description: string
    relesed: string
    rating: number
    votes: number
    slogan: string | null
    movieLength: number | null
    seriesLength: number | null
    ageRating: number
    poster: string
    backdrop: string | null
    persons: {
        id:number
        name:string
        img:string
    }[]
    genres: { name: string, id: number }[]
    type: { name: string }
    status: { name: string }
    list: string | null;
    viewsPage:number
    countries:{name:string , id: number}[]
    link:string
}

export interface IMovieShortInfo {
    countries?:{name:string, id:number}[]
    viewsPage?:number
    list?:string | null
    status?:{name:string}
    type?:{name:string}
    seriesLength?:number | null
    movieLength?:number | null
    votes?:number
    rating?:number
    relesed?:number
}