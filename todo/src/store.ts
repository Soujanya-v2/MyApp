import { configureStore ,Action} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer from './rootReducer';
import { RootState } from './rootReducer';
const store = configureStore ({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      
    }),
});
export type AppDispatch = typeof store.dispatch;
// export type RootState=ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;