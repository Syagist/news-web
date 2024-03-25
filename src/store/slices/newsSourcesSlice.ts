import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NEWS_API, REACT_APP_NEWS_API_KEY} from "constants/AppConstants";
import {InewsSources} from "interfaces/Isource";

const initialState: InewsSources = {
    status: null,
    sources: [],
    loading: true,
    error: null
};

const fetchSources = createAsyncThunk(
    'sources/fetchSources',
    async () => {

        try {
            const endpoint = `${NEWS_API}/top-headlines/sources?apiKey=${REACT_APP_NEWS_API_KEY}`;
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
            throw Error('Failed to fetch Sources');
        }
    }
);

const sourcesSlice = createSlice({
    name: 'sources',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSources.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSources.fulfilled, (state, action) => {
                state.loading = false;
                state.sources = action.payload.sources;
            })
            .addCase(fetchSources.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch sources';
            });
    },
});

export default sourcesSlice.reducer;

export {fetchSources};


