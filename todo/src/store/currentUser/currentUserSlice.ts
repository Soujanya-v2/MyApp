// import { RootState } from "../../reducers/rootReducer";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../data/types/user.interface";
import { RootState } from "../../rootReducer";
import { LoggedInType } from "../../data/types/loggedInUser";


const initialState = {
  loggedIn: false,
  loading: false,
  logOutTriggered: false,
} as LoggedInType;

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }: PayloadAction<LoggedInType>) => {
   
      state.loggedIn = payload.token? true : false;
 
      state.token=payload.token;
     
    },
    updateCurrentUser: (state, { payload }: PayloadAction<UserType>) => {
      state.user = payload;
    },
    setLoggedOut: (state) => {
      state.user = undefined;
      state.loggedIn = false;
      state.logOutTriggered = true;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }: PayloadAction<boolean>) => {
      state.errors = payload;
    },
  
  },
});

export const {
  setLoading,
  setErrors,
  setLoggedIn,
  setLoggedOut,
  updateCurrentUser,
 
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
export const currentUserSelector = (state: RootState) => state.currentUser;
