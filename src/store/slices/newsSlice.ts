import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NEWS_API, REACT_APP_NEWS_API_KEY} from "constants/AppConstants";
import {INews} from "interfaces/Inews";

const initialState: INews = {
    status: null,
    totalResults: null,
    articles: null,
    loading: true,
    error: null
};

interface NewsRequestProperties {
    query: string,
    order: string,
    sources: string;//'bbc-news,cnn,the-new-york-times'
}

const fetchNews = createAsyncThunk(
    'articles/fetchNews',
    async ({query, order, sources}: NewsRequestProperties) => {

        try {
            const endpoint = `${NEWS_API}/everything?sources=${sources}&q=${query}&sortBy=${order}&apiKey=${REACT_APP_NEWS_API_KEY}&pageSize=5`;
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
            throw Error('Failed to fetch News');
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload.articles;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch News';
            });
    },
});

export default newsSlice.reducer;

export {fetchNews};


