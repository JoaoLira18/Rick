import {
    Text,
    Name,
    Status,
    Header,
    Content,
    Container,
    Placeholder,
    ImageWrapper,
    CharacterImage,
    StatusDescription,
    StatusIconIndicator,
} from './styles'

import React from 'react';
import { NavigationProp, ParamListBase, useRoute } from '@react-navigation/native';

import { BackButton } from './commons/BackButton';
import { CharacterDto } from '../../Dtos/CharacterDto';
import theme from '../../styles/theme';
import { StatusBar } from 'react-native';

type CharacterDetailsProp = {
    navigation: NavigationProp<ParamListBase>
}

export const CharacterDetails = ({ navigation }: CharacterDetailsProp) => {

    const route = useRoute()
    const { gender, image, location, name, origin, species, status } = route.params as CharacterDto

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor={theme.colors.shape_dark}
            />

            <Header>
                <BackButton onPress={() => navigation.goBack()} />
            </Header>

            <ImageWrapper>
                <CharacterImage source={{ uri: image }} resizeMode='contain' />
            </ImageWrapper>

            <Content>

                <Name>{name}</Name>

                <Status>
                    <StatusIconIndicator status={status} />
                    <StatusDescription>{status}</StatusDescription>
                </Status>

                <Text>Specie: {species}</Text>

                <Text>Gender: {gender}</Text>

                <Placeholder>Last Known location:</Placeholder>
                <Text>{location.name}</Text>

                <Placeholder>Origin:</Placeholder>
                <Text>{origin.name}</Text>

            </Content>

        </Container>
    );
}