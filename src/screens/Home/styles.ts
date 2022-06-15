import styled from 'styled-components/native';
import {
    Image,
    FlatList,
    TextInput,
    ImageProps,
    FlatListProps,
    TextInputProps
} from 'react-native';

import { CharacterDto } from '../../Dtos/CharacterDto';

export const Container = styled.View`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    padding: 15px;
`;

export const SearchBar = styled.View`
    flex-direction: row;
`;

export const Input = styled(TextInput) <TextInputProps>`
    width: 90%;
    height: 40px;
    
    padding: 5px 15px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.title};
`;

export const SearchButton = styled.TouchableOpacity`

width: 10%;
height: 40px;

align-items: center;
justify-content: center;

border-left-width: 1px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-color: ${({ theme }) => theme.colors.text_detail};

background-color: ${({ theme }) => theme.colors.shape};
`;

export const Modal = styled.Modal`
   width: 100%;
   height: 150px;
`;

export const Icon = styled(Image) <ImageProps>`
    width: 22px;
    height: 22px;

    right: 5px;
`;

export const CardWrapper =
    styled(FlatList as new (props: FlatListProps<CharacterDto>) => FlatList<CharacterDto>)`
    flex: 1;

    padding: 15px;
`;

export const FooterLoad = styled.View`
    width: 100%;
    
    margin-bottom: 50px;
    align-items: center;
    
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const ListEmpty = styled.Text`
    font-size: 20px;
    align-self: center;
    color: ${({ theme }) => theme.colors.text_detail};
`;