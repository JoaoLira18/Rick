import React, { createContext, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { CharacterDto } from '../Dtos/CharacterDto'

// type Props = {
//     getFavorites: void
//     favoritesList: CharacterDto
// }

export const FavoritesContext = createContext({})

const FavoritesProvider = ({children}: any) => {

    const [favoritesList, setFavoritesList] = useState<CharacterDto[]>([])

    const getFavorites = async () => {
        const dataKey = `@RickAndMorty:favorites`
        const response = await AsyncStorage.getItem(dataKey)
        const favorites = response ? JSON.parse(response) : []

        setFavoritesList(favorites)
    }

    return (
        <FavoritesContext.Provider value={{ getFavorites, favoritesList}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider