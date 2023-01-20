import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
import { User, UserInfo } from "../utils/typescript";

//add typescript
const initialState: User = {
  value: {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
    },
    login: {
      isLogged: false,
      token: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.value.userInfo = action.payload;
    },
    addLoggedStatus: (state, action: PayloadAction<boolean>) => {
      state.value.login.isLogged = action.payload;
    },
    addToken: (state, action: PayloadAction<string>) => {
      state.value.login.token = action.payload;
    },
    addlogout: (state) => {
      state.value.login.isLogged = false;
      state.value.login.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserInfo, addLoggedStatus, addToken, addlogout } =
  userSlice.actions;
export const selectCount = (state: RootState) => state.user.value;

export default userSlice.reducer;
