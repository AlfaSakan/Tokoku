import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {postItem, updateAmountItem} from '../../../../services/item.service';
import {ItemDocument, OrderItemDocument} from '../../../../types/itemType';
import {randomNumber} from '../../../../utils/randomNumber';

const initialState: ItemDocument[] = [];

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<ItemDocument[]>) {
      state.push(...action.payload);
    },

    addNewItem(state, action: PayloadAction<ItemDocument>) {
      const isExist = state.some(item => item.name === action.payload.name);

      if (!isExist) {
        const newItem = {
          ...action.payload,
          id: randomNumber(),
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };

        state.push(newItem);
        postItem(newItem);

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

    updateAmount(state, action: PayloadAction<OrderItemDocument>) {
      state.forEach((item, index) => {
        if (item.id === action.payload.itemId) {
          if (action.payload.type === 'kurang') {
            state[index].amounts = item.amounts - action.payload.amount;
          } else {
            state[index].amounts = item.amounts + action.payload.amount;
          }
          state[index].updatedAt = new Date().getTime();
        }
      });

      updateAmountItem(action.payload);
    },
  },
});

export const {addNewItem, removeItem, updateItem, addItems, updateAmount} =
  itemSlice.actions;
export default itemSlice.reducer;
