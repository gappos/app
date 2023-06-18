import { StyleSheet, View, ViewProps } from 'react-native';

import { Country as CountryType } from '../../../graphql';
import Text from '../../common/Text';
import Location from './Location';

interface Props extends ViewProps {
  country: CountryType;
}

const styles = StyleSheet.create({
  locations: { marginLeft: 20 },
});

const Country = ({ country, ...props }: Props) => (
  <View {...props}>
    <Text>{country.country}</Text>
    {country?.cities.length ? (
      <View style={styles.locations}>
        <Text>Cities:</Text>
        {country.cities.map(city => (
          <Location
            key={city.city}
            name={city.city}
            style={{ marginLeft: 30 }}
          />
        ))}
      </View>
    ) : null}
    {country?.places.length ? (
      <View style={styles.locations}>
        <Text>Places:</Text>
        {country.places.map(place => (
          <Location
            key={place.place}
            name={place.place}
            style={{ marginLeft: 30 }}
          />
        ))}
      </View>
    ) : null}
  </View>
);

export default Country;
