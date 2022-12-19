import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export const userSlice = createSlice({
  name: "user",
  initialState: { user: null ,userName:null, loggedIn:false},

  reducers: {
    login: (state, action) => {
      state.user = action.payload.data;
      state.userName=action.payload.email;
      state.loggedIn= true ;
    },
    signOut:(state,action)=>{
      state.loggedIn=false;
    }
  },
});

export const { login,signOut } = userSlice.actions;
export default userSlice.reducer;
export const currentUserSelector = (state: RootState) => state.user;