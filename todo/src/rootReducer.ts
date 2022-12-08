import { combineReducers } from '@reduxjs/toolkit'
import { currentUserSlice } from './store/currentUser/currentUserSlice';


const rootReducer=combineReducers({
  currentUser:currentUserSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer