import { ViewProps } from 'react-native';

export interface StatusType extends ViewProps {
    status: 'Dead' | 'Alive' | 'unknown'
}