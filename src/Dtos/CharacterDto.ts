import { StatusType } from "./statusType"

export type CharacterDto = {
    id: number
    name: string
    status: 'Dead' | 'Alive' | 'unknown'
    species: string
    type: string
    gender: string
    origin: {
        name: string,
        url: string
    }
    location: {
        name: string,
        url: string
    }
    image: string
    episode: []
    url: string
    created: string
}

// export interface CharacterDto {
//     info: {
//         count: number,
//         pages: number,
//         next: string,
//         prev: string
//     },
//     results: {
//         id: string,
//         name: string,
//         status: string,
//         species: string,
//         type: string,
//         gender: string,
//         origin:{
//             name:string,
//             url: string
//         },
//         location:{
//             name: string,
//             url: string
//         },
//         image: string,
//         episode: string[],
//         url: string,
//         created: string,
//     }
// }