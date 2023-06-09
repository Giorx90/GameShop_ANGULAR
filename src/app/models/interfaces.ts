export interface FormateGame {
    id: number,
    title: string,
    platform: [],
    gender: [],
    developer: string,
    price: number,
    rating: number,
    img: string
    downloaded: boolean
}
export interface FormateUser {
    email: string,
    password: string,
    firstname: string, 
    lastname: string, 
    age: number, 
    cart: [],
    games: [],
    id: number
}