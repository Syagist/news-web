import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from "react-redux";
import newsSlice from "./slices/newsSlice";
import newsGuardianSlice from "./slices/newsGuardianSlice";
import newsSourcesSlice from "./slices/newsSourcesSlice";
import newsNewYorkTimesSlice from "./slices/newsSourcesSlice";

const store = configureStore({
    reducer: {
        newsSources: newsSourcesSlice,
        newsGuardian: newsGuardianSlice,
        newsNewYorkTimes: newsNewYorkTimesSlice,
        news: newsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;

