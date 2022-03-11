import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import itemsReducer from '../features/item/itemSlice';
import orderItemReducer from '../features/orderItem/orderItemSlice';
import incomeReducer from '../features/income/incomeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    orderItem: orderItemReducer,
    incomesState: incomeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
