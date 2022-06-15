import { Container, ImageSplash } from './styles';

import React, { useEffect } from "react";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Animated, {
    runOnJS,
    withTiming,
    interpolate,
    useSharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";

type SplashProp = {
    navigation: NavigationProp<ParamListBase>
}

export const Splash = ({ navigation }: SplashProp) => {

    const splashAnimation = useSharedValue(0);

    const splashStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [10, 30, 50],
                [1, 0.2, 1],
            ),
        }
    })

    function startApp() {
        navigation.navigate('TabBottomRoutes')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 5000 },
            () => {
                'worklet'
                runOnJS(startApp)()
            }
        )
    }, [])

    return (
        <Container>
            <Animated.View style={[splashStyle, { position: 'absolute' }]} >
                <ImageSplash
                    source={require('../../assets/splashImage.png')}
                    resizeMode='contain'
                />
            </Animated.View>
        </Container>
    )
}