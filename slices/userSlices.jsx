"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: {},
  userProfile: {},
  editUser: false,
};


const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserValue: (state, action) => {
      state.userValue = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },
    resetState: (state) => initialState,
  },
});

// Exporting the reducer and actions
export default userSlice.reducer;
export const { setUserValue, setUserProfile, setEditUser, resetState } = userSlice.actions;
