import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GUARDIAN_API, REACT_APP_GUARDIAN_API_KEY} from "constants/AppConstants";

interface ArticleFields {
    thumbnail: string,
    trailText: string
}

export interface IGuardianArticle {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    fields: ArticleFields
}

export interface IGuardianNews {
    loading: boolean,
    error: null | string,
    response: {
        status: string;
        userTier: string;
        total: number;
        startIndex: number;
        pageSize: number;
        currentPage: number;
        pages: number;
        orderBy: string;
        results: IGuardianArticle[];
    } | null;
}

const initialState: IGuardianNews = {
    response: null,
    loading: true,
    error: null
};


const fetchGuardianNews = createAsyncThunk(
    'articles/fetchGuardianNews',
    async ({query}: { query: string }) => {
        try {
            const endpoint = `${GUARDIAN_API}/search?q=${query}&api-key=${REACT_APP_GUARDIAN_API_KEY}&show-fields=thumbnail,trailText`;
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
                debugger
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


