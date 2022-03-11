import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  storeName: string;
}

const initialState: UserState = {
  storeName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<string>) {
      state.storeName = action.payload;
    },
  },
});

export const {setUserState} = userSlice.actions;
export default userSlice.reducer;
