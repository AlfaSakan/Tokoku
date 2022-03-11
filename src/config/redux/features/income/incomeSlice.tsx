import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IncomeDocument} from '../../../../types/incomeType';
import {randomNumber} from '../../../../utils/randomNumber';

const initialState: IncomeDocument[] = [
  {
    amount: 1000000,
    createdAt: new Date().getTime(),
    description: 'blablablablaba',
    id: randomNumber(),
  },
  {
    amount: 1000000,
    createdAt: new Date(2021, 10, 25).getTime(),
    description: 'blablablablaba',
    id: randomNumber(),
  },
];

const itemSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncomesState(state, action: PayloadAction<IncomeDocument[]>) {
      state.push(...action.payload);
    },

    addNewIncomeState(state, action: PayloadAction<IncomeDocument>) {
      const newItem = {
        ...action.payload,
        id: randomNumber(),
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };

      state.push(newItem);
    },

    updateIncome(state, action: PayloadAction<IncomeDocument>) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          const updatedAt = new Date().getTime();

          state[index] = {...item, ...action.payload, updatedAt};
        }
      });
    },

    removeIncome(state, action: PayloadAction<IncomeDocument>) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      state.splice(itemIndex, 1);
    },
  },
});

export const {addIncomesState, addNewIncomeState, removeIncome, updateIncome} =
  itemSlice.actions;
export default itemSlice.reducer;
