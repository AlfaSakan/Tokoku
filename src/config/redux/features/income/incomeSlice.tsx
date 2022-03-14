import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  postIncome,
  removeIncome,
  updateIncome,
} from '../../../../services/income.service';
import {IncomeDocument} from '../../../../types/incomeType';
import {randomNumber} from '../../../../utils/randomNumber';

const initialState: IncomeDocument[] = [];

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

      postIncome(newItem);
    },

    updateIncomeState(state, action: PayloadAction<IncomeDocument>) {
      const updatedAt = new Date().getTime();
      action.payload.updatedAt = updatedAt;

      console.log(action.payload);

      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state[index] = {...item, ...action.payload};
        }
      });

      updateIncome(action.payload);
    },

    removeIncomeState(state, action: PayloadAction<IncomeDocument>) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      state.splice(itemIndex, 1);
      removeIncome(action.payload);
    },
  },
});

export const {
  addIncomesState,
  addNewIncomeState,
  removeIncomeState,
  updateIncomeState,
} = itemSlice.actions;
export default itemSlice.reducer;
