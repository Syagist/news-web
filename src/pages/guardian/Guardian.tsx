import React, {useEffect, useState} from 'react';
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import {fetchGuardianNews} from "store/slices/newsGuardianSlice";
import Search from "../../components/common/search/Search";
import Articles from "../../components/common/articles/Articles";

const Guardian = () => {
    const dispatch = useAppDispatch();
    const newsGuardian = useAppSelector((state: RootState) => state.newsGuardian);
    const [query, setQuery] = useState('armenia');

    useEffect(() => {
        dispatch(fetchGuardianNews({query: query}));
    }, [query, dispatch]);

    const searchNews = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <Search value={query} onSearchChange={searchNews}/>
            <Articles news={newsGuardian}/>
        </div>
    );
};

export default Guardian;