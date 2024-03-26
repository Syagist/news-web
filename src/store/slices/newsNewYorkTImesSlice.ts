import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface INewYorkTimesData {
    loading: boolean,
    error: null | string,
    response: INewYorkTimes
}

interface INewYorkTimes {
    docs: INewYorkTimesDocument[];
}

interface INewYorkTimesDocument {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: {
        rank: number;
        subtype: string;
        caption: string | null;
        credit: string | null;
        type: string;
        url: string;
        height: number;
        width: number;
        legacy: {
            [key: string]: string;
        };
        subType: string;
        crop_name: string;
    }[];
    headline: {
        main: string;
        kicker: string | null;
        content_kicker: string | null;
        print_headline: string | null;
        name: string | null;
        seo: string | null;
        sub: string | null;
    };
    keywords: {
        name: string;
        value: string;
        rank: number;
        major: string;
    }[];
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    subsection_name: string;
    byline: {
        original: string;
        person: {
            firstname: string;
            middlename: string | null;
            lastname: string;
            qualifier: string | null;
            title: string | null;
            role: string;
            organization: string;
            rank: number;
        }[];
        organization: string | null;
    };
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
}

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
