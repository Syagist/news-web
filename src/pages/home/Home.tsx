import React, { useEffect, useState, ChangeEvent } from 'react';
import Select, { SingleValue } from 'react-select';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { fetchGuardianNews } from 'store/slices/newsGuardianSlice';
import { fetchNews } from 'store/slices/newsSlice';
import { fetchSources } from 'store/slices/newsSourcesSlice';
import { StyledHome, StyledPreferencesWrapper, StyledPreferenceWrapper, StyledTitle } from './StyledHome';
import Articles from 'components/common/articles/Articles';
import Search from 'components/common/search/Search';
import RangePicker from 'components/common/rangePicker/RangePicker';
import { ORDERS } from 'constants/AppConstants';
import { Irange } from 'interfaces/Irange';
import { Option } from 'interfaces/Ioption';
import {fetchNewYorkTimesNews} from "store/slices/newsNewYorkTImesSlice";

const Home = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState<string>('armenia');
    const [order, setOrder] = useState<Option>(ORDERS[0]);
    const [sources, setSources] = useState<string>('');
    const [range, setRange] = useState<Irange>({ from: '', to: '' });

    const newsSources = useAppSelector((state: RootState) => state.newsSources);
    const news = useAppSelector((state: RootState) => state.news);
    const newsGuardian = useAppSelector((state: RootState) => state.newsGuardian);
    const newsNewYorkTimes = useAppSelector((state: RootState) => state.newsNewYorkTimes);

    useEffect(() => {
        dispatch(fetchSources());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchNews({ query, order: order.label, sources, range }));
        dispatch(fetchGuardianNews({ query, range }));
        dispatch(fetchNewYorkTimesNews({ query, range }));
    }, [query, order, sources, range, dispatch]);

    const searchNews = (value: string) => {
        setQuery(value);
    };

    const onRangeSelected = (start: string, end: string) => {
        setRange({ from: start, to: end });
    };

    const orderSelected = (newValue: SingleValue<Option>) => {
        if (newValue) {
            setOrder(newValue);
        }
    };

    const sourcesSelected = (newValue: SingleValue<Option>) => {
        if (newValue?.title) {
            setSources(prevState => prevState.concat(newValue.title + ','));
        }
    };


    return (
        <StyledHome>
            <Search  onSearchChange={searchNews} />
            <StyledPreferencesWrapper>
                <StyledPreferenceWrapper>
                    <Select
                        value={order}
                        onChange={orderSelected}
                        options={ORDERS}
                        placeholder="Order"
                    />
                </StyledPreferenceWrapper>
                <StyledPreferenceWrapper>
                    <Select
                        onChange={sourcesSelected}
                        options={newsSources.sources.map(source => ({
                            label: source.name,
                            title: source.id
                        }))}
                        placeholder="Select source"
                    />
                </StyledPreferenceWrapper>
                <StyledPreferenceWrapper>
                    <RangePicker onRangeSelected={onRangeSelected} />
                </StyledPreferenceWrapper>
            </StyledPreferencesWrapper>

            <StyledTitle>News API</StyledTitle>
            <Articles news={news} />
            <StyledTitle>Guardian API</StyledTitle>
            <Articles news={newsGuardian} />
            <StyledTitle>NewYorkTimes API</StyledTitle>
            <Articles news={newsNewYorkTimes} />
        </StyledHome>
    );
};

export default Home;
