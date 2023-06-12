import { Platform } from 'react-native';

export const hasStatusBar = () => Platform.OS !== 'web';
