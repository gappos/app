import { Pressable, View, ViewProps } from 'react-native';
import { useDispatch } from 'react-redux';

import Text from '../../common/Text';
import { Screens, setLocationId, setScreen } from '../../../redux';

interface Props extends ViewProps {
  name: string;
  locationId: string;
}

const ShowLocation = ({ name, locationId, ...props }: Props) => {
  const dispatch = useDispatch();
  return (
    <View {...props}>
      <Pressable
        onPress={() => {
          dispatch(setLocationId(locationId));
          dispatch(setScreen(Screens.LOCATION));
        }}
      >
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

export default ShowLocation;
