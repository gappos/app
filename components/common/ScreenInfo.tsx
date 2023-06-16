import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';

import { State } from '../../redux';
import { colors } from '../../config';
import { screen } from '../../helpers';

export default function ScreenInfo() {
  const theme = useSelector((state: State) => state.theme.theme);

  const styles = StyleSheet.create({
    para: {
      color: colors[theme].color,
      fontSize: 20,
      fontWeight: '400',
    },
  });

  return (
    <View>
      <Text style={styles.para}>{`screen is ${JSON.stringify(
        screen,
        null,
        2,
      )}`}</Text>
      <Text
        style={styles.para}
      >{`Status bar height is ${getStatusBarHeight()}`}</Text>
    </View>
  );
}
