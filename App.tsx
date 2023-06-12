import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { hasStatusBar } from './helpers';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.header}>This is GAPP App</Text>
      <Text style={styles.para}>{`screen is ${JSON.stringify(
        Dimensions.get('screen'),
        null,
        2,
      )}`}</Text>
      <Text
        style={styles.para}
      >{`Status bar height is ${getStatusBarHeight()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(200, 20%, 20%)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    ...(hasStatusBar() ? { paddingTop: '8%' } : {}),
  },
  header: {
    color: 'hsl(200, 40%, 80%)',
    fontSize: 35,
    fontWeight: '900',
  },
  para: {
    color: 'hsl(200, 40%, 80%)',
    fontSize: 20,
    fontWeight: '400',
  },
});
