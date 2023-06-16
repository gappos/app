import { Switch } from 'react-native-switch';
import { useDispatch, useSelector } from 'react-redux';
import { StyleProp, View, ViewStyle } from 'react-native';

import { State, Theme, setTheme } from '../../redux';
import { colors } from '../../config';
import { isMobile, screen } from '../../helpers';
import DarkThemeIcon from './svg/DarkThemeIcon';
import LightThemeIcon from './svg/LightThemeIcon';

interface Props {
  style: StyleProp<ViewStyle>;
}

const { scale } = screen;
const darkTopMargin = -4 * scale;
const lightTopMargin = -3 * scale;

const textTopMargin = (theme: Theme) =>
  isMobile()
    ? { marginTop: theme === Theme.DARK ? darkTopMargin : lightTopMargin }
    : {};

const ThemeSwitch = ({ style }: Props) => {
  const theme = useSelector((state: State) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = (themeToggleValue: boolean) => {
    dispatch(setTheme(themeToggleValue ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <View style={style}>
      <Switch
        value={theme === Theme.DARK}
        onValueChange={toggleTheme}
        activeText=''
        inActiveText=''
        circleSize={40}
        circleBorderWidth={1}
        renderInsideCircle={() =>
          theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />
        }
        innerCircleStyle={{
          borderColor: colors[theme].color,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        backgroundActive={colors[Theme.LIGHT].backgroundColor as string}
        backgroundInactive={colors[Theme.DARK].backgroundColor as string}
        circleActiveColor={colors[Theme.DARK].backgroundColor as string}
        circleInActiveColor={colors[Theme.LIGHT].backgroundColor as string}
      />
    </View>
  );
};
export default ThemeSwitch;
