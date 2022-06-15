import {
   Name,
   Text,
   Status,
   Wrapper,
   StatusName,
   Placeholder,
   FavoriteIcon,
   CardTouchable,
   CharacterImage,
   FavoriteTouchable,
   DescriptionWrapper,
   StatusIconIndicator,
} from './styles'

import React, { memo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacityProps, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { CharacterDto } from '../Dtos/CharacterDto';

interface Props extends TouchableOpacityProps {
   data: CharacterDto
   favorite: true | false | undefined
}

const Card = ({ data, favorite, ...rest }: Props) => {

   const navigation = useNavigation();
   const _onPress = () => navigation.navigate("CharacterDetails", data);

   const { image, name, status, species, id } = data;

   const [favoriteState, setFavorite] = useState(favorite)

   const handleAddFavorite = async () => {

      try {
         const dataKey = `@RickAndMorty:favorites`
         const dataFromAsync = await AsyncStorage.getItem(dataKey)
         const currentData = dataFromAsync ? JSON.parse(dataFromAsync) : []
         
         let thereIsCharacter = false

         currentData.forEach((character: CharacterDto) => {
            if (id == character.id) {
               thereIsCharacter = true
            }
         });

         if (thereIsCharacter == false) {
            const dataFormatted = [
               ...currentData,
               data
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))
            ToastAndroid.show('Added successfully', 1000)
         }

      } catch (error) {
         console.log(error)
      }

   }

   const handleRemoveFavorite = async () => {
      try {
         const dataKey = `@RickAndMorty:favorites`
         const dataFromAsync = await AsyncStorage.getItem(dataKey)
         const currentData = dataFromAsync ? JSON.parse(dataFromAsync) : []
         
         let newData = currentData.filter((character: CharacterDto) => character.id !== id)

         AsyncStorage.setItem(dataKey, JSON.stringify(newData))

         ToastAndroid.show('removed successfully', 1000)

      } catch (error) {
         console.log(error)
      }
   }

   const onClickFavorite = () => {
      favoriteState
         ? handleRemoveFavorite()
         : handleAddFavorite()

      setFavorite(!favoriteState)
   }

   return (
      <CardTouchable
         onPress={_onPress}
         {...rest}
      >
         <CharacterImage
            source={{ uri: image }}
            resizeMode='contain'
         />

         <DescriptionWrapper>
            <Wrapper>
               <Name numberOfLines={2} ellipsizeMode={'tail'} >{name}</Name>
               <FavoriteTouchable
                  onPress={onClickFavorite}
               >
                  <FavoriteIcon
                     source={
                        favoriteState == true && require("../assets/yellowStar.png") ||
                        favoriteState == false && require("../assets/star.png") ||
                        favoriteState == undefined && <></>
                     }
                  />
               </FavoriteTouchable>
            </Wrapper>

            <Status>
               <StatusIconIndicator status={status} />
               <StatusName>{status}</StatusName>
            </Status>

            <Placeholder>Specie: <Text>{species}</Text></Placeholder>

         </DescriptionWrapper>

      </CardTouchable>
   )
}

export const CharacterCard = memo(Card, () => true)

// export const CharacterCard = memo(Card, (prev, next) => {
//    console.log(prev);
//    console.log(next);
//    if (prev.show != next.show) {
//       return false
//    } else {

//       return true
//    }
// )