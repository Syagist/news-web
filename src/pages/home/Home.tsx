import React, {useEffect, useState} from 'react';
import {StyledHome} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import {fetchNews} from "store/slices/newsSlice";
import Articles from "components/common/articles/Articles";
import Search from "components/common/search/Search";

const Home = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.news);
    const [query, setQuery] = useState('armenia');

    useEffect(() => {
        dispatch(fetchNews({query: query}))
    }, [query, dispatch]);

    const searchNews = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <StyledHome>
            <Search value={query} onSearchChange={searchNews}/>
            <Articles news={news}/>
        </StyledHome>
    );
};

export default Home;