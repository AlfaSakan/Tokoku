import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderItemDocument} from '../../../../types/itemType';
import {randomNumber} from '../../../../utils/randomNumber';

const initialState: OrderItemDocument[] = [];

const orderItemSlice = createSlice({
  name: 'orderItem',
  initialState,
  reducers: {
    addOrderItem(state, action: PayloadAction<OrderItemDocument>) {
      state.push({
        ...action.payload,
        id: randomNumber(),
        createdAt: new Date().getTime(),
      });
    },

    removeOrderItem(state, action: PayloadAction<OrderItemDocument>) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      state.splice(itemIndex, 1);
    },
  },
});

export const {addOrderItem, removeOrderItem} = orderItemSlice.actions;
export default orderItemSlice.reducer;
