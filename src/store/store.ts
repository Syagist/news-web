import { configureStore } from '@reduxjs/toolkit';
import {useDispatch, useSelector} from "react-redux";
import guardianSectionsSlice from './slices/guardianSectionsSlice';
import archiveSlice from './slices/archiveSlice';
import newsSlice from "./slices/newsSlice";

const store = configureStore({
    reducer: {
        sections: guardianSectionsSlice,
        archives: archiveSlice,
        news: newsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;

