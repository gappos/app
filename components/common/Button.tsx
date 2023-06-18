import {
  Pressable,
  Text,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../redux';
import { colors } from '../../config';

interface Props extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle;
}

const Button = (props: Props) => {
  const theme = useSelector((state: State) => state.theme.theme);

  const {
    title = props.children ? props.children : 'Enter',
    titleStyle,
    style,
    ...restProps
  } = props;
  const backgroundColor = colors[theme].buttonColor;
  const color = colors[theme].color;
  return (
    <Pressable
      style={{ backgroundColor, padding: 6, ...(style as Object) }}
      {...restProps}
    >
      <Text
        style={{
          color,
          textTransform: 'uppercase',
          alignSelf: 'center',
          fontWeight: 'bold',
          ...titleStyle,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
