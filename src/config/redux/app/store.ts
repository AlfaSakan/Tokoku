import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemsReducer from '../features/item/itemSlice';
import orderItemReducer from '../features/orderItem/orderItemSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    orderItem: orderItemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
