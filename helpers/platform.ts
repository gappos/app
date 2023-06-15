import { Dimensions, Platform } from 'react-native';

export const isMobile = () => Platform.OS !== 'web';

export const screen = Dimensions.get('screen');
