import { configureStore } from '@reduxjs/toolkit';
import {useDispatch, useSelector} from "react-redux";
import newsSlice from "./slices/newsSlice";
import newsGuardianSlice from "./slices/newsGuardianSlice";

const store = configureStore({
    reducer: {
        newsGuardian: newsGuardianSlice,
        news: newsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;

