import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducers, actions } = loginRegisterSlice;
export const { setUser } = actions;

export default reducers;
