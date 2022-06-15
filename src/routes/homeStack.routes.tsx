import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, CharacterDetails } from '../screens';
import { CharacterDto } from '../Dtos/CharacterDto';

export type RootStackParamList = {
    HomeScreen: undefined;
    CharacterDetails: CharacterDto
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen" >

            <Screen
                name='HomeScreen'
                component={Home}
            />

            <Screen
                name='CharacterDetails'
                component={CharacterDetails}
            />

        </Navigator>
    );
}