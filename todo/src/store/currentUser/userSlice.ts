import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
const initialState={
  user: null ,userName:null, loggedIn:false
};
export const userSlice = createSlice({
  name: "user",
  initialState ,
  
  reducers: {
    login: (state, action) => {
      state.user = action.payload.data;
      state.userName=action.payload.email;
      state.loggedIn= true ;
    },
    signOut:()=> initialState,
    
  },
});

export const { login,signOut } = userSlice.actions;
export default userSlice.reducer;
export const currentUserSelector = (state: RootState) => state.user;
