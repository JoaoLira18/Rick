import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Favorites, CharacterDetails } from '../screens';
import { CharacterDto } from '../Dtos/CharacterDto';

export type RootStackParamList = {
    FavoriteScreen: undefined;
    CharacterDetails: CharacterDto
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function FavoriteStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="FavoriteScreen" >

            <Screen
                name='FavoriteScreen'
                component={Favorites}
            />

            <Screen
                name='CharacterDetails'
                component={CharacterDetails}
            />

        </Navigator>
    );
}