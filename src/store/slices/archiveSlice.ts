import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GUARDIAN_API, NEW_YORK_TIMES} from "constants/AppConstants";
import axios from "axios";

interface CategoryState {
    data: any,
    loading: boolean,
    error: null | string

}

const initialState: CategoryState = {
    data: null,
    loading: false,
    error: null,
};

const fetchArchives = createAsyncThunk(
    'archives/fetchArchives',
    async () => {
        try {
            const endpoint = `${NEW_YORK_TIMES}/svc/archive/v1/2019/1.json?api-key=WYITjuRMNuexA42p6cWkZZjxABoX1GDX`;
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
            throw Error('Failed to fetch Archives');
        }
    }
);

const archiveSlice = createSlice({
    name: 'archives',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArchives.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArchives.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchArchives.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch Archives';
            });
    },
});

export default archiveSlice.reducer;

export {fetchArchives};