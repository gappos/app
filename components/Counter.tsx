import { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { State } from '../redux';
import { addAmount, decrement, increment } from '../redux/reducers';

export default function Counter() {
  const count = useSelector((state: State) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

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
            title='Add'
            onPress={() => {
              const payload = parseInt(amount);
              if (!Number.isNaN(payload)) dispatch(addAmount(payload));
              setAmount('');
            }}
          />
        </View>
      </View>
      <Text style={styles.text}>{`COUNTER: ${count}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'hsl(200, 40%, 80%)',
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
    color: 'hsl(200, 40%, 80%)',
    borderColor: 'hsl(200, 40%, 80%)',
    borderWidth: 1,
  },
});
