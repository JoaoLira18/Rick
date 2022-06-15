import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashRoute from './splash.routes'

import FavoritesProvider from '../contexts/favorites';

export function Routes(){
   return (
        <NavigationContainer>
            <FavoritesProvider>
                <SplashRoute />
            </FavoritesProvider>
        </NavigationContainer>
   );
}