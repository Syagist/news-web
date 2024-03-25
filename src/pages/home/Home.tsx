import React, {useEffect, useState} from 'react';
import {StyledHome} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import {fetchNews} from "store/slices/newsSlice";
import Articles from "components/common/articles/Articles";
import Search from "components/common/search/Search";

const Home = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.news);
    const [country, setCountry] = useState('armenia');

    useEffect(() => {
        dispatch(fetchNews({country: country}))
    }, [country, dispatch]);

    const searchNews = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setCountry(event.target.value);
    }

    return (
        <StyledHome>
            <Search value={country} onSearchChange={searchNews}/>
            <Articles news={news}/>
        </StyledHome>
    );
};

export default Home;