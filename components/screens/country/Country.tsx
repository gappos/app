import { Pressable, StyleSheet, View, ViewProps } from 'react-native';
import { useState } from 'react';

import { Country as CountryType } from '../../../graphql';
import Text from '../../common/Text';
import Location from './Location';

interface Props extends ViewProps {
  country: CountryType;
}

const styles = StyleSheet.create({
  country: {},
  locations: { marginLeft: 20 },
});

const Country = ({ country, style, ...remainingProps }: Props) => {
  const [show, setShow] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);

  return (
    <View style={{ ...styles.country, ...(style as {}) }} {...remainingProps}>
      <Pressable onPress={() => setShow(prev => !prev)}>
        <Text>{country.country}</Text>
      </Pressable>
      {show ? (
        <View>
          <View style={styles.locations}>
            <Pressable onPress={() => setShowCities(prev => !prev)}>
              <Text>Cities:</Text>
            </Pressable>
            {showCities && country?.cities.length
              ? country.cities.map(city => (
                  <Location
                    key={city.city}
                    name={city.city}
                    style={{ marginLeft: 30 }}
                  />
                ))
              : null}
          </View>
          <View style={styles.locations}>
            <Pressable onPress={() => setShowPlaces(prev => !prev)}>
              <Text>Places:</Text>
            </Pressable>
            {showPlaces && country?.places.length
              ? country.places.map(place => (
                  <Location
                    key={place.place}
                    name={place.place}
                    style={{ marginLeft: 30 }}
                  />
                ))
              : null}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Country;
