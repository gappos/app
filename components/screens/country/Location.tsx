import { View, ViewProps } from 'react-native';
import Text from '../../common/Text';

interface Props extends ViewProps {
  name: string;
}

const Location = ({ name, ...props }: Props) => {
  return (
    <View {...props}>
      <Text>{name}</Text>
    </View>
  );
};

export default Location;
