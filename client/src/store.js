import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";

const store = configureStore({
  reducer: {
    userStore: loginReducer,
  },
});

export default store;
