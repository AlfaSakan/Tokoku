import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemDocument, OrderItemDocument} from '../../../../types/itemType';
import {randomNumber} from '../../../../utils/randomNumber';

const initialState: ItemDocument[] = [];

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addNewItem(state, action: PayloadAction<ItemDocument>) {
      const isExist = state.some(item => item.name === action.payload.name);

      if (!isExist) {
        state.push({
          ...action.payload,
          id: randomNumber(),
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        });
        return;
      }
      state;
    },

    updateItem(state, action: PayloadAction<ItemDocument>) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          const updatedAt = new Date().getTime();

          state[index] = {...item, ...action.payload, updatedAt};
        }
      });
    },

    removeItem(state, action: PayloadAction<ItemDocument>) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      state.splice(itemIndex, 1);
    },

    addAmount(state, action: PayloadAction<OrderItemDocument>) {
      state.forEach((item, index) => {
        if (item.id === action.payload.itemId) {
          state[index].amounts = item.amounts + action.payload.amount;
          state[index].updatedAt = new Date().getTime();
        }
      });
    },

    subtractAmount(state, action: PayloadAction<OrderItemDocument>) {
      state.forEach((item, index) => {
        if (item.id === action.payload.itemId) {
          state[index].amounts = item.amounts - action.payload.amount;
          state[index].updatedAt = new Date().getTime();
        }
      });
    },
  },
});

export const {addNewItem, removeItem, updateItem, addAmount, subtractAmount} =
  itemSlice.actions;
export default itemSlice.reducer;
