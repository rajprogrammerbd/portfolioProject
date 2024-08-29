import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from './reducers/HomeReducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
        homepage: homepageReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']