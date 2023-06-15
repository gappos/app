import { Text } from 'react-native';

import { colors } from '../../config';
import { Theme } from '../../redux';

const DarkThemeIcon = () => (
  <Text style={{ color: colors[Theme.LIGHT].color }}>🌘</Text>
);
export default DarkThemeIcon;
