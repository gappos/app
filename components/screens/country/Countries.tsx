import { StyleSheet, View } from 'react-native';

import Text from '../../common/Text';
import { useCountriesQuery } from '../../../graphql';
import Country from './Country';

const styles = StyleSheet.create({
  container: {},
  text: { fontSize: 20, alignSelf: 'center' },
  countries: { marginLeft: 20 },
});

const Countries = () => {
  const { loading, error, data } = useCountriesQuery();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Countries</Text>
      {loading ? <Text>Loading...</Text> : null}
      {error ? (
        <Text style={styles.text}>{JSON.stringify(error, null, 2)}</Text>
      ) : null}
      {data
        ? data.countries.map(country => (
            <Country
              key={country.country}
              country={country}
              style={styles.countries}
            />
          ))
        : null}
    </View>
  );
};

export default Countries;
