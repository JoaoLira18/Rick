import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens';
import TabBottomRoutes from './tab.routes';

export type RootStackParamList = {
    Splash: undefined;
    TabBottomRoutes: undefined
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function SplashRoute() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash" >
            <Screen
                name='Splash'
                component={Splash}
                options={{ gestureEnabled: false }}
            />

            <Screen
                name='TabBottomRoutes'
                component={TabBottomRoutes}
                options={{ gestureEnabled: false }}
            />

        </Navigator>
    );
}