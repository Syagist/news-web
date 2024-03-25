import React, {useEffect, useState} from 'react';
import {StyledHome} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import {fetchNews} from "store/slices/newsSlice";
import Articles from "components/common/articles/Articles";
import Search from "components/common/search/Search";
import {fetchGuardianNews} from "../../store/slices/newsGuardianSlice";

const Home = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.news);
    const newsGuardian = useAppSelector((state: RootState) => state.newsGuardian);
    const [query, setQuery] = useState('armenia');

    useEffect(() => {
        dispatch(fetchNews({query: query}))
        dispatch(fetchGuardianNews({query: query}));
    }, [query, dispatch]);

    const searchNews = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <StyledHome>
            <Search value={query} onSearchChange={searchNews}/>
            <h2>News api</h2>
            <Articles news={news}/>
            <h2>guardian api</h2>
            <Articles news={newsGuardian}/>
        </StyledHome>
    );
};

export default Home;