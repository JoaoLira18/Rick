import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { StatusType } from '../Dtos/statusType';

export const CardTouchable = styled(TouchableOpacity)<TouchableOpacityProps>`
   flex-direction: row;

   width: 100%;
`;

export const CharacterImage = styled.Image`
   width: 30%;
   height: 120px;
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;

   background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const DescriptionWrapper = styled.View`
   width: 70%;
   height: 120px;
   
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;

   background-color: ${({ theme}) => theme.colors.background_secondary};

   padding: 5px 15px;
   margin-bottom: 20px;

   justify-content: space-evenly;
`;

export const Name = styled.Text`
   font-size: 20px;
   font-weight: bold;
   font-family: sans-serif;
   color: ${({ theme }) => theme.colors.shape};

   max-width: 200px;

   text-align: center;

   margin-bottom: 10px;
`;

export const FavoriteIcon = styled.Image`
   width: 25px;
   height: 25px;
`;

export const FavoriteTouchable = styled.TouchableOpacity`
   width: 40px;
   height: 40px;

   justify-content: center;
   align-items: center;

`;

export const Wrapper = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const Status = styled.View`
   flex-direction: row;
   align-items: center;

   margin-bottom: 5px;
`;

export const StatusIconIndicator = styled(View)<StatusType>`
   width: 10px;
   height: 10px;
   border-radius: 5px;

   background-color: ${({ theme, status }) =>
      status === 'Alive' && theme.colors.alive ||
      status === 'Dead' && theme.colors.died ||
      status === 'unknown' && theme.colors.text};

   margin-right: 5px;
`;

export const StatusName = styled.Text`
   font-family: sans-serif;
   font-size: 18px;
   color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.Text`
   font-family: sans-serif;
   font-size: 15px;
   color: ${({ theme }) => theme.colors.text};
`;

export const Placeholder = styled.Text`
   font-family: sans-serif;
   font-size: 15px;
   color: ${({ theme }) => theme.colors.text_detail};
`;
