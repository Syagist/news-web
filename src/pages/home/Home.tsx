import React, {useEffect, useState} from 'react';
import {StyledHome} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import Articles from "components/common/articles/Articles";
import Search from "components/common/search/Search";
import {ORDERS} from "constants/AppConstants";
import RangePicker from "components/common/rangePicker/RangePicker";
import {fetchNews} from "store/slices/newsSlice";
import {Option} from "interfaces/Ioption";
import Select, {ActionMeta, SingleValue} from "react-select";
import {fetchSources} from "store/slices/newsSourcesSlice";

const Home = () => {
    const dispatch = useAppDispatch();
    const newsSources = useAppSelector((state: RootState) => state.newsSources);
    const news = useAppSelector((state: RootState) => state.news);
    const newsGuardian = useAppSelector((state: RootState) => state.newsGuardian);
    const [query, setQuery] = useState('armenia');
    const [order, setOrder] = useState<Option>(ORDERS[0]);
    const [sources, setSources] = useState([]);

    useEffect(() => {
        dispatch(fetchSources())
        dispatch(fetchNews({query, order: order.label, sources: 'bbc-news,cnn,the-new-york-times'}))
        // dispatch(fetchGuardianNews({query: query}));
        console.log(news)
    }, [query, order, dispatch]);


    const searchNews = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const onRangeSelected = (start: string, end: string) => {
        console.log(start)
        console.log(end)
    }

    const orderSelected = (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
        if (newValue) {
            setOrder(newValue);
        }
    };

    const sourcesSelected = (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
        console.log(newValue)
    };

    // const sourcesSelected = (option: SingleValue<Option>) => {
    //     setOrder(option!.label);
    // }


    return (
        <StyledHome>
            <Search value={query} onSearchChange={searchNews}/>
            <Select
                value={order}
                onChange={orderSelected}
                options={ORDERS}
                placeholder={'Order'}
            />
            <Select
                value={{ label: newsSources.sources[0].id, title: newsSources.sources[0].name }}
                onChange={sourcesSelected}
                options={newsSources.sources.map(source =>
                    ({ label:source.name , title: source.id } ))} // Convert sources to options format
                placeholder={'Select source'}
            />
            <RangePicker onRangeSelected={onRangeSelected}/>
            <h2>News api</h2>
            <Articles news={news}/>
            <h2>guardian api</h2>
            <Articles news={newsGuardian}/>
        </StyledHome>
    );
};

export default Home;