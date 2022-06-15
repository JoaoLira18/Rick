import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { CharacterDto } from '../../Dtos/CharacterDto';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
   width: 100%;
   height: 50px;

   align-items: center;
   justify-content: center;
`; 

export const Title = styled.Text`
   font-size: 22px;
   color: ${({ theme: {colors} }) => colors.shape};
`;

export const CardWrapper =
    styled(FlatList as new (props: FlatListProps<CharacterDto>) => FlatList<CharacterDto>)`
   
    flex: 1;
    padding: 15px;
`;
