import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IList } from 'interfaces/list.interface';
import type { RootState } from 'store';

interface ListState {
  lists: IList[];
}

const initialState: ListState = {
  lists: [
    {
      id: 1,
      title: 'My Tasks',
    },
  ],
};

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<IList>) => {
      state.lists = state.lists.concat(action.payload);
    },
  },
});

export const { addList } = listSlice.actions;

export const selectlist = (state: RootState) => state.list.lists;

export default listSlice.reducer;
