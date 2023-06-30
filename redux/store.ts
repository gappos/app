import { configureStore } from '@reduxjs/toolkit';

import { counter } from './reducers/counter';
import { theme } from './reducers/theme';
import { screen } from './reducers/screen';
import { locationId } from './reducers/locationId';
import { Screens, Theme } from './types';

export interface State {
  theme: { theme: Theme };
  counter: { count: number };
  screen: { screen: Screens };
  locationId: { locationId: string };
}

export const store = configureStore({
  reducer: {
    counter,
    theme,
    screen,
    locationId,
  },
});
