import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IList } from 'interfaces/list.interface';
import type { RootState } from 'store';

interface ListState {
  lists: IList[];
  activeList: string;
}

const initialState: ListState = {
  lists: [
    {
      id: 1,
      title: 'My Tasks',
    },
  ],
  activeList: '',
};

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<IList>) => {
      state.lists = state.lists.concat(action.payload);
    },
    setActiveList: (state, action: PayloadAction<string>) => {
      state.activeList = action.payload;
    },
  },
});

export const { addList, setActiveList } = listSlice.actions;

export const selectlist = (state: RootState) => state.list.lists;

export default listSlice.reducer;
