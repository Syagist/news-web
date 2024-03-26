import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {INewYorkTimesData} from "interfaces/InewYorkTimes";
import {INewYorkTimes} from "interfaces/InewYorkTimes";


const initialState: INewYorkTimesData = {
    response: {} as INewYorkTimes,
    loading: true,
    error: null
};

const fetchNewYorkTimesNews = createAsyncThunk(
    'articles/fetchNewYorkTimesNews',
    async () => {
        try {
            const baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

            const queryParams = {
                begin_date: '20220301',
                end_date: '20220331',
                sort: 'newest',
                'api-key': 'h1TylVtDCbyqnZZWgBXfGhU0lXQr7Cw1',
                page_size: 20
            };
            const response = await axios.get(baseUrl, {params: queryParams});
            return response.data.response; // Return response.data directly
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
                state.response.docs = action.payload.docs; // Access docs directly
            })
            .addCase(fetchNewYorkTimesNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch News';
            });
    },
});

export default newYorkTimesNewsSlice.reducer;

export {fetchNewYorkTimesNews};
