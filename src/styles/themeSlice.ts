import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { theme } from './theme';

interface ThemeState {
  theme: typeof theme;
}

const initialState: ThemeState = {
  theme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
