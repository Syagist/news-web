import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NEWS_API, NEWS_API_KEY} from "constants/AppConstants";
import axios from "axios";

interface EverythingState {
    data: any,
    loading: boolean,
    error: null | string
}

const initialState: EverythingState = {
    data: null,
    loading: false,
    error: null,
};

const fetchEverything = createAsyncThunk(
    'everything/fetchEverything',
    async () => {
        try {
            const query = `everything?q=bitcoin&apiKey=${NEWS_API_KEY}`
            const endpoint = `${NEWS_API}${query}`;
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
            throw Error('Failed to fetch Everything');
        }
    }
);

const everythingSlice = createSlice({
    name: 'everything',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEverything.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEverything.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEverything.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch Everything';
            });
    },
});

export default everythingSlice.reducer;

export {fetchEverything};