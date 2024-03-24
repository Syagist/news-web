import React, {useEffect, useState} from 'react';
import {StyledHome} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import {fetchNews} from "store/slices/newsSlice";
import Articles from "components/common/articles/Articles";

const Home = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.news);
    const [country, setCountry] = useState('armenia');

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchNews({country: country}));
            } catch (error) {
                console.log('Error occurred while fetching news:', error);
            }
        };

        fetchData();
    }, [country, dispatch]);

    const searchNews = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setCountry(event.target.value);
    }

    return (
        <StyledHome>
            <input onChange={searchNews} value={country}/>
            <Articles news={news}/>
        </StyledHome>
    );
};

export default Home;