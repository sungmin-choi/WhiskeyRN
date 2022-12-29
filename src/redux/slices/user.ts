import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  //extraReducer는 비동기 액션 생성시 필요
  // extraReducers: builder => {},
});
export const {setLoggedIn} = userSlice.actions;
export default userSlice;
