import { ColorValue, Text, TextProps } from 'react-native';
import { useSelector } from 'react-redux';

import { State } from '../../redux';
import { colors } from '../../config';

const _Text = ({ children, style, ...remainingProps }: TextProps) => {
  const theme = useSelector((state: State) => state.theme.theme);
  const { color, ...remainingStyleProps } = style as { color: ColorValue };
  return (
    <Text
      style={{ color: colors[theme].color, ...remainingStyleProps }}
      {...remainingProps}
    >
      {children}
    </Text>
  );
};

export default _Text;
