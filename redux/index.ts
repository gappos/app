import { configureStore } from '@reduxjs/toolkit';

import { counter } from './reducers';

export interface State {
  counter: { count: number };
}

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
