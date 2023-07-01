import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Screens } from '../types';

const initialState: { screen: Screens } = {
  screen: Screens.COUNTRIES,
};

const screenSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setHome(state) {
      state.screen = Screens.HOME;
    },
    setScreen(state, action: PayloadAction<Screens>) {
      state.screen = action.payload;
    },
  },
});

export const {
  reducer: screen,
  actions: { setHome, setScreen },
} = screenSlice;
