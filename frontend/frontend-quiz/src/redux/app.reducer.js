import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [],
 
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    userProfile: (state, action) => {
      state.profile = action.payload;
    },
   
  },
});

export const { userProfile } = appSlice.actions;
export default appSlice;
