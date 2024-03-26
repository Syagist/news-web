import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GUARDIAN_API, REACT_APP_GUARDIAN_API_KEY} from "constants/AppConstants";
import {IGuardianNews} from "interfaces/Iguardian";
import {Irange} from "../../interfaces/Irange";


const initialState: IGuardianNews = {
    response: null,
    loading: true,
    error: null
};

interface GuardianRequestProperties {
    query: string,
    range: Irange
}

const fetchGuardianNews = createAsyncThunk(
    'articles/fetchGuardianNews',
    async ({query, range}: GuardianRequestProperties) => {
        try {
            let dateQuery = '';
            if (range.to && range.from) {
                dateQuery = `&from-date=${range.from}&to-date=${range.to}`
            }
            const endpoint = `${GUARDIAN_API}/search?q=${query}${dateQuery}&api-key=${REACT_APP_GUARDIAN_API_KEY}&show-fields=thumbnail,trailText`;
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
            throw Error('Failed to fetch News');
        }
    }
);

const guardianNewsSlice = createSlice({
    name: 'guardianNews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGuardianNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGuardianNews.fulfilled, (state, action) => {
                state.loading = false;
                state.response = action.payload.response;
            })
            .addCase(fetchGuardianNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch News';
            });
    },
});

export default guardianNewsSlice.reducer;

export {fetchGuardianNews};


