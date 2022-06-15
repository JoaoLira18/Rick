import styled from 'styled-components/native';

import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import theme from '../../../styles/theme';
import { Icon } from '../../../../helper/icon';

export const BackButton = ({ ...rest }: TouchableOpacityProps) => {
   return (
      <BackTouchable {...rest} >
         <Icon
            name={"arrow-back"}
            lib={"MaterialIcons"}
            color={theme.colors.shape}
            size={30}
         />
      </BackTouchable>
   )
}

export const BackTouchable = styled(TouchableOpacity)<TouchableOpacityProps>`
   width: 60px;
   height: 60px;
   
   align-items: center;
   justify-content: center;
`;