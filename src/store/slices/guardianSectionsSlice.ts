import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GUARDIAN_API} from "constants/AppConstants";
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

const fetchSections = createAsyncThunk(
    'sections/fetchSections',
    async () => {
        try {

            const endpoint = `${GUARDIAN_API}/sections&api-key=afc04f16-a674-4b1a-b143-121c0b77e5d3`;
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
            throw Error('Failed to fetch Sections');
        }
    }
);

const categorySlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSections.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSections.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSections.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch Sections';
            });
    },
});

export default categorySlice.reducer;

export {fetchSections};