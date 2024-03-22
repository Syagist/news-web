import { configureStore } from '@reduxjs/toolkit';
import guardianSectionsSlice from './slices/guardianSectionsSlice';
import archiveSlice from './slices/archiveSlice';
import {useDispatch, useSelector} from "react-redux";
import everythingSlice from "./slices/everythingSlice";

const store = configureStore({
    reducer: {
        sections: guardianSectionsSlice,
        archives: archiveSlice,
        everything: everythingSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;