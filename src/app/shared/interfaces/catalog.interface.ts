export interface ICatalog {
    statusCode:number
    data:ICatalogCard[]
    props: {
        page: number
        pages:number
        total:number
        count:number
    }
}


export interface ICatalogCard {
    id:number
    name:string
    altName:string
    relesed:number
    rating:number
    ageRating:number
    poster:string
    genres:{id:number, name:string}[]
    type:{id:number, name:string}
}

export interface SelectItem{
    label:string 
    value:string  
}