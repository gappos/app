import { Pressable, StyleSheet, View, ViewProps } from 'react-native';
import { useState } from 'react';

import { Country as CountryType } from '../../../graphql';
import Text from '../../common/Text';
import ShowLocation from './ShowLocation';

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
                  <ShowLocation
                    key={city.city}
                    name={city.city}
                    locationId={city.locationId}
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
                  <ShowLocation
                    key={place.place}
                    name={place.place}
                    locationId={place.locationId}
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
