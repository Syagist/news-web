import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NEWS_API, REACT_APP_NEWS_API_KEY} from "constants/AppConstants";
import {INews} from "interfaces/Inews";
import {Irange} from "../../interfaces/Irange";

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
    sources: string;
    range:Irange
}

const fetchNews = createAsyncThunk(
    'articles/fetchNews',
    async ({query, order, sources, range}: NewsRequestProperties) => {
        try {
            const endpoint = `${NEWS_API}/everything?sources=${sources}&q=${query}&from=${range.from}&to=${range.to}&sortBy=${order}&apiKey=${REACT_APP_NEWS_API_KEY}&pageSize=30`;
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


