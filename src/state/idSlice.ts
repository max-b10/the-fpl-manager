import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IdState {
  value: string;
}

const initialState: IdState = {
  value: '',
};

export const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
