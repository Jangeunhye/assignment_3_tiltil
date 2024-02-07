import { createSlice } from "@reduxjs/toolkit";

type user = {
  nickName: string;
};

export const userSlice = createSlice({
  initialState: <user>{
    nickName: "",
  },
  name: "user",
  reducers: {
    updateNickName(state: user, action) {
      state.nickName = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { updateNickName } = userSlice.actions;
