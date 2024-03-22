import React, {useEffect, useState} from 'react';
import {StyledHome} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import {fetchNews} from "store/slices/newsSlice";
import Articles from "../../components/common/articles/Articles";

const Home = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.news);
    const [country, setCountry] = useState('armenia');

    useEffect(() => {
        dispatch(fetchNews({country: country}));
    }, [country]);

    const searchNews = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setCountry(event.target.value);
    }

    return (
        <StyledHome>
            <input onChange={searchNews} value={country}/>
            <Articles articles={news.articles}/>
        </StyledHome>
    );
};

export default Home;