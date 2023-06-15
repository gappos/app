import { configureStore } from '@reduxjs/toolkit';

import { counter } from './reducers/counter';
import { theme } from './reducers/theme';
import { Theme } from './types';

export interface State {
  theme: { theme: Theme };
  counter: { count: number };
}

export const store = configureStore({
  reducer: {
    counter,
    theme,
  },
});
