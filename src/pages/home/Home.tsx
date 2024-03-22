import React, {useEffect} from 'react';
import {StyledHome} from "./StyledHome";
import {useAppDispatch,RootState, useAppSelector} from "store/store";
import {fetchNews} from "store/slices/newsSlice";
import Articles from "../../components/common/articles/Articles";

const Home = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.news);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <StyledHome>
            <Articles articles={news.articles}  />
        </StyledHome>
    );
};

export default Home;