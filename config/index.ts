import { ColorValue } from 'react-native';

import { Theme } from '../redux';

type Colors = Record<Theme, Record<string, ColorValue | undefined>>;

export const colors: Colors = {
  [Theme.DARK]: {
    color: `hsl(200,70%,80%)`,
    backgroundColor: `hsl(200,70%,20%)`,
    buttonColor: `hsl(200,70%,30%)`,
  },
  [Theme.LIGHT]: {
    color: `hsl(200,70%,20%)`,
    backgroundColor: `hsl(200,40%,90%)`,
    buttonColor: `hsl(200,40%,70%)`,
  },
};

const localIP = '192.168.0.45:3000';
// const localIP = 'localhost:3000';

export const env = {
  API_URL: `http://${localIP}/graphql`,
};
