import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { isMobile } from '../helpers';

import { State, Theme } from '../redux';
import { useSelector } from 'react-redux';
import { colors } from '../config';
import ThemeSwitch from './common/ThemeSwitch';
import Home from './screens/Home';
import Countries from './screens/country/Countries';

export default function App() {
  const theme = useSelector((state: State) => state.theme.theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[theme].backgroundColor,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      ...(isMobile() ? { paddingTop: '8%' } : {}),
    },
    header: {
      alignSelf: 'center',
      color: colors[theme].color,
      fontSize: 35,
      fontWeight: '900',
    },
    themeSwitch: {
      position: 'absolute',
      bottom: 30,
      right: 30,
    },
    screen: {
      padding: 10,
      width: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style={theme === Theme.LIGHT ? 'dark' : 'light'} />
      <ThemeSwitch style={styles.themeSwitch} />
      <Text style={styles.header}>This is GAPP App</Text>
      <View style={styles.screen}>
        {/* <Home /> */}
        <Countries />
      </View>
    </View>
  );
}
