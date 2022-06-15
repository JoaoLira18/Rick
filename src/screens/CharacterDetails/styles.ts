import styled from 'styled-components/native';

import { View } from 'react-native';

import { StatusType } from '../../Dtos/statusType';

export const Container = styled.ScrollView`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Header = styled.View`
    width: 100%;
    height: 50px;

    background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const ImageWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.shape_dark};

    width: 100%;
    height: 250px;

    align-items: center;

    margin-bottom: 15px;
`;

export const CharacterImage = styled.Image`
    width: 75%;
    height: 250px;

    border-radius: 20px;
`;

export const Content = styled.View`
    flex: 1;

    padding: 0 20px;
`;

export const Name = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text_detail};

    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Status = styled.View`
   flex-direction: row;
   align-items: center;

   margin-bottom: 15px;
`;

export const StatusIconIndicator = styled(View)<StatusType>`
    width: 10px;
    height: 10px;
    border-radius: 5px;

    justify-content: center;
    align-items: center;

    margin-right: 5px;

    background-color: ${({ theme, status }) =>
        status === 'Alive' && theme.colors.alive ||
        status === 'Dead' && theme.colors.died ||
        status === 'unknown' && theme.colors.text};
`;

export const StatusDescription = styled.Text`
    font-family: sans-serif;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.text_detail};

    padding-left: 5px;
`;

export const Text = styled.Text`
   font-family: sans-serif;
   font-size: 25px;
   color: ${({ theme }) => theme.colors.text_detail};

   margin-bottom: 15px;
`;

export const Specie = styled.Text`
   font-family: sans-serif;
   font-size: 25px;
   color: ${({ theme }) => theme.colors.text_detail};

   margin-bottom: 15px;
`;

export const Placeholder = styled.Text`
    font-family: sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text_detail};
`;
