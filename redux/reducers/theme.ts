import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Theme } from '../types';

const initialState: { theme: Theme } = {
  theme: Theme.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDark(state) {
      state.theme = Theme.DARK;
    },
    setLight(state) {
      state.theme = Theme.LIGHT;
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const {
  reducer: theme,
  actions: { setDark, setLight, setTheme },
} = themeSlice;
