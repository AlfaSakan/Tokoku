import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {postOrderItem} from '../../../../services/orderItem.service';
import {OrderItemDocument} from '../../../../types/itemType';
import {randomNumber} from '../../../../utils/randomNumber';

const initialState: OrderItemDocument[] = [];

const orderItemSlice = createSlice({
  name: 'orderItem',
  initialState,
  reducers: {
    addOrderItems(state, action: PayloadAction<OrderItemDocument[]>) {
      state.push(...action.payload);
    },

    addOrderItem(state, action: PayloadAction<OrderItemDocument>) {
      const newOrderItem = {
        ...action.payload,
        id: randomNumber(),
        createdAt: new Date().getTime(),
      };

      state.push(newOrderItem);
      postOrderItem(newOrderItem);
    },

    removeOrderItem(state, action: PayloadAction<OrderItemDocument>) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      state.splice(itemIndex, 1);
    },
  },
});

export const {addOrderItem, removeOrderItem, addOrderItems} =
  orderItemSlice.actions;
export default orderItemSlice.reducer;
