import { Text } from 'react-native';

import { colors } from '../../../config';
import { Theme } from '../../../redux';

const LightThemeIcon = () => (
  <Text style={{ color: colors[Theme.DARK].color }}>🌞</Text>
);
export default LightThemeIcon;
