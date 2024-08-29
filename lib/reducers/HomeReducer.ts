import { BlackBackgroundStaticColors, WhiteBackgroundStaticColors } from '@/data/Home';
import { Colors, HomepageState } from '@/types/Home';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: HomepageState = {
    color: BlackBackgroundStaticColors,
    loaded: false
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<Colors>) => {
        if (action.payload === '#050709') {
            state.color = BlackBackgroundStaticColors;
        } else {
            state.color = WhiteBackgroundStaticColors;
        }
    },
    changeWebLoadedOnce: (state) => {
        if (!state.loaded) {
            state.loaded = true;
        }
    }
  },
})

export const { changeColor, changeWebLoadedOnce } = homepageSlice.actions

export default homepageSlice.reducer