import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NEWS_API, REACT_APP_NEWS_API_KEY} from "constants/AppConstants";

interface ISource {
    id: string | null;
    name: string;
}

export interface IArticle {
    source: ISource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | undefined;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string | null;
    totalResults: number | null;
    articles: IArticle[] | null;
    loading: boolean,
    error: null | string
}

const initialState: INews = {
    status: null,
    totalResults: null,
    articles: null,
    loading: true,
    error: null
};

const fetchNews = createAsyncThunk(
    'articles/fetchNews',
    async () => {
        try {
            const query = `/everything?q=armenia&apiKey=${REACT_APP_NEWS_API_KEY}`
            const endpoint = `${NEWS_API}${query}`;
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


