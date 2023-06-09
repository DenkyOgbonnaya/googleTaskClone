import { configureStore } from '@reduxjs/toolkit';
import listSlice from 'screens/dashboard/listSlice';
import taskSlice from 'screens/tasks/taskSlice';
import themeSlice from 'styles/themeSlice';

const store = configureStore({
  reducer: {
    tasks: taskSlice,
    theme: themeSlice,
    list: listSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
