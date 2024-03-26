import React, {useEffect, useState} from 'react';
import {StyledHome, StyledPreferencesWrapper, StyledPreferenceWrapper, StyledTitle} from "./StyledHome";
import {RootState, useAppDispatch, useAppSelector} from "store/store";
import Articles from "components/common/articles/Articles";
import Search from "components/common/search/Search";
import {ORDERS} from "constants/AppConstants";
import RangePicker from "components/common/rangePicker/RangePicker";
import {Irange} from "interfaces/Irange";
import {Option} from "interfaces/Ioption";
import Select, {SingleValue} from "react-select";
import {fetchGuardianNews} from "store/slices/newsGuardianSlice";
import {fetchNews} from "store/slices/newsSlice";
import {fetchSources} from "store/slices/newsSourcesSlice";
import axios from "axios";
import {fetchNewYorkTimesNews} from "../../store/slices/newsNewYorkTImesSlice";

const Home = () => {
    const dispatch = useAppDispatch();
    const newsSources = useAppSelector((state: RootState) => state.newsSources);
    const news = useAppSelector((state: RootState) => state.news);
    const newsGuardian = useAppSelector((state: RootState) => state.newsGuardian);
    const newsNewYorkTimes = useAppSelector((state: RootState) => state.newsNewYorkTimes);


    const [query, setQuery] = useState('armenia');
    const [order, setOrder] = useState<Option>(ORDERS[0]);
    const [sources, setSources] = useState<string>('');
    const [range, setRange] = useState<Irange>({from: '', to: ''});

    useEffect(() => {
        // dispatch(fetchSources())
        // dispatch(fetchNews({query, order: order.label, sources, range}))
        // dispatch(fetchGuardianNews({query: query, range}));
        dispatch(fetchNewYorkTimesNews());
    }, [query, order, sources, range, dispatch]);

    useEffect(() => {
        console.log(newsNewYorkTimes)
    }, [newsNewYorkTimes]);
    // useEffect(() => {
    //    const f =async () => {
    //        const response = await axios.get(
    //            'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=h1TylVtDCbyqnZZWgBXfGhU0lXQr7Cw1'
    //        );
    //        console.log(response)
    //    }
    //    f()
    // }, []);
    const searchNews = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const onRangeSelected = (start: string, end: string) => {
        setRange({from: start, to: end});
    }

    const orderSelected = (newValue: SingleValue<Option>) => {
        if (newValue) {
            setOrder(newValue);
        }
    };

    const sourcesSelected = (newValue: SingleValue<Option>) => {
        if (newValue?.title) {
            setSources(prevState => {
                return prevState.concat(newValue.title + ',');
            });
        }
    };

    return (
        <StyledHome>
            <Search value={query} onSearchChange={searchNews}/>
            <StyledPreferencesWrapper>
                <StyledPreferenceWrapper>
                    <Select
                        value={order}
                        onChange={orderSelected}
                        options={ORDERS}
                        placeholder={'Order'}
                    />
                </StyledPreferenceWrapper>
                <StyledPreferenceWrapper>
                    <Select
                        onChange={sourcesSelected}
                        options={newsSources.sources.map(source =>
                            ({label: source.name, title: source.id}))} // Convert sources to options format
                        placeholder={'Select source'}
                    />
                </StyledPreferenceWrapper>
                <StyledPreferenceWrapper>
                    <RangePicker onRangeSelected={onRangeSelected}/>
                </StyledPreferenceWrapper>
            </StyledPreferencesWrapper>

            <StyledTitle>News api</StyledTitle>
            <Articles news={news}/>
            <StyledTitle>guardian api</StyledTitle>
            <Articles news={newsGuardian}/>
        </StyledHome>
    );
};

export default Home;