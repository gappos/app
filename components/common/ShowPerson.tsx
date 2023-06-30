import { TextProps } from 'react-native';

import { Person } from '../../graphql';
import Text from './Text';

interface Props extends TextProps {
  person: Person;
}

const ShowPerson = ({ person }: Props) => <Text>{person.name}</Text>;

export default ShowPerson;
