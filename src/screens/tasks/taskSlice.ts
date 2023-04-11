import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ITask } from 'interfaces/task.interface';
import type { RootState } from 'store';

interface TaskState {
  tasks: ITask[];
}

const initialState: TaskState = {
  tasks: [],
};

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.concat(action.payload);
    },
  },
});

export const { addTask } = counterSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default counterSlice.reducer;
