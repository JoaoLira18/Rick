import { Title, Header, Container, CardWrapper } from './styles'

import React, { useCallback, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { CharacterCard } from '../../components/CharacterCard';
import { FavoritesContext } from '../../contexts/favorites';

export function Favorites() {

   const { favoritesList, getFavorites }: any = useContext(FavoritesContext)

   useFocusEffect(useCallback(() => {
      getFavorites()
   }, []));

   return (
      <Container>

         <CardWrapper
            data={favoritesList}
            keyExtractor={(item, _) => String(item.id)}
            renderItem={({ item }) =>
               <CharacterCard
                  data={item}
                  favorite={undefined}
               />
            }
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
               <Header>
                  <Title>Without any favorites</Title>
               </Header>
            }
         />

      </Container>
   );
}