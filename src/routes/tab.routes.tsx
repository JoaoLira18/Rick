import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack.routes'
import FavoriteStack from './favoriteStack.routes';
import theme from '../styles/theme';
import { Icon } from '../../helper/icon';

type TabParamList = {
    Home: undefined;
    Favorites: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

export default function TabBottomRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.alive,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 50,
                    backgroundColor: theme.colors.shape_dark,
                }
            }}
        >
            <Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <Icon name={"home"} lib={"FontAwesome"} color={color} size={size} />
                    )
                }}
            />

            <Screen
                name="Favorites"
                component={FavoriteStack}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <Icon name={"favorite"} lib={"Fontisto"} color={color} size={size} />
                    )
                }}
            />

        </Navigator >
    );
}