import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { State } from '../../redux';
import { addAmount, decrement, increment } from '../../redux';
import { colors } from '../../config';
import Button from './Button';

export default function Counter() {
  const { count, theme } = useSelector((state: State) => ({
    count: state.counter.count,
    theme: state.theme.theme,
  }));
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const styles = StyleSheet.create({
    text: {
      color: colors[theme].color,
      fontSize: 30,
    },
    buttons: {
      gap: 10,
      padding: 10,
    },
    input: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
    inputBox: {
      width: 150,
      height: 30,
      color: colors[theme].color,
      borderColor: colors[theme].color,
      borderWidth: 1,
    },
  });

  return (
    <View>
      <View style={styles.buttons}>
        <Button title='Increase' onPress={() => dispatch(increment())} />
        <Button title='Decrease' onPress={() => dispatch(decrement())} />
        <View style={styles.input}>
          <TextInput
            style={styles.inputBox}
            value={amount}
            onChangeText={setAmount}
          />
          <Button
            onPress={() => {
              const payload = parseInt(amount);
              if (!Number.isNaN(payload)) dispatch(addAmount(payload));
              setAmount('');
              Keyboard.dismiss();
            }}
            titleStyle={{ fontWeight: 'normal' }}
          >
            Add
          </Button>
        </View>
      </View>
      <Text style={styles.text}>{`Count: ${count}`}</Text>
    </View>
  );
}
