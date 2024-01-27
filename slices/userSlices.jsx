"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: {},
};

// Moved serialize function inside the userSlice
const serialize = (payload) => {
  // Implement custom serialization logic here
  return {
    ...payload,
    updated_at: String(payload?.updated_at),
    created_at: String(payload?.created_at),
  };
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserValue: (state, action) => {
      state.userValue = (action.payload);
    },
  },
});

// Exporting the reducer and actions
export default userSlice.reducer;
export const { setUserValue } = userSlice.actions;
