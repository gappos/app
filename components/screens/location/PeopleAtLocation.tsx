import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { State } from '../../../redux';
import { usePeopleQuery } from '../../../graphql';
import Text from '../../common/Text';
import ShowPerson from '../../common/ShowPerson';

const styles = StyleSheet.create({
  container: {},
  text: { fontSize: 20, alignSelf: 'center' },
  countries: { marginLeft: 20 },
});

const PeopleAtLocation = () => {
  const locationId = useSelector((state: State) => state.locationId.locationId);
  const { loading, error, data } = usePeopleQuery({
    variables: { searchOptions: { person: { placeId: locationId } } },
  });

  return (
    <View style={styles.container}>
      {loading ? <Text>Loading...</Text> : null}
      {error ? (
        <Text style={styles.text}>{JSON.stringify(error, null, 2)}</Text>
      ) : null}
      {data ? (
        data.people?.length ? (
          data.people.map(person => (
            <ShowPerson key={person.id} person={person} />
          ))
        ) : (
          <Text>No one's there</Text>
        )
      ) : null}
    </View>
  );
};

export default PeopleAtLocation;
