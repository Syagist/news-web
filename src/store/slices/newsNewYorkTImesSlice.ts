import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {INewYorkTimes, INewYorkTimesData} from "interfaces/InewYorkTimes";
import {Irange} from "interfaces/Irange";
import {NEW_YORK_TIMES, REACT_APP_NYT_API_KEY} from "constants/AppConstants";


const initialState: INewYorkTimesData = {
    response: {} as INewYorkTimes,
    loading: true,
    error: null
};

interface NewYorkTimesNewsProperties {
    query: string,
    range: Irange
}

interface QueryParams {
    q?: string;
    sort?: string;
    'api-key': string;
    page_size?: number;
    begin_date?: string;
    end_date?: string;
}

const fetchNewYorkTimesNews = createAsyncThunk(
    'articles/fetchNewYorkTimesNews',
    async ({query, range}: NewYorkTimesNewsProperties) => {
        try {
            const baseUrl = `${NEW_YORK_TIMES}/svc/search/v2/articlesearch.json`;
            const queryParams: QueryParams = {
                q: query,
                sort: 'newest',
                'api-key': REACT_APP_NYT_API_KEY ?? '',
                page_size: 20
            };

            if (range.from) {
                queryParams.begin_date = range.from;
            }
            if (range.to) {
                queryParams.end_date = range.to;
            }

            const response = await axios.get(baseUrl, {params: queryParams});
            return response.data.response;
        } catch (error) {
            throw Error('Failed to fetch News');
        }
    }
);

const newYorkTimesNewsSlice = createSlice({
    name: 'newYorkTimesNews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewYorkTimesNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewYorkTimesNews.fulfilled, (state, action) => {
                state.loading = false;
                state.response.docs = action.payload.docs;
            })
            .addCase(fetchNewYorkTimesNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch News';
            });
    },
});

export default newYorkTimesNewsSlice.reducer;

export {fetchNewYorkTimesNews};
