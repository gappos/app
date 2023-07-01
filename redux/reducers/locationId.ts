import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { locationId: string } = {
  locationId: '',
};

const locationIdSlice = createSlice({
  name: 'locationId',
  initialState,
  reducers: {
    setLocationId(state, action: PayloadAction<string>) {
      state.locationId = action.payload;
    },
  },
});

export const {
  reducer: locationId,
  actions: { setLocationId },
} = locationIdSlice;
