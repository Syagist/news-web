import React, {useEffect, useState} from 'react';
import Select, {SingleValue} from 'react-select';
import {RootState, useAppDispatch, useAppSelector} from 'store/store';
import {fetchGuardianNews} from 'store/slices/newsGuardianSlice';
import {fetchNews} from 'store/slices/newsSlice';
import {fetchSources} from 'store/slices/newsSourcesSlice';
import Articles from 'components/common/articles/Articles';
import Search from 'components/common/search/Search';
import RangePicker from 'components/common/rangePicker/RangePicker';
import {ORDERS} from 'constants/AppConstants';
import {Irange} from 'interfaces/Irange';
import {Option} from 'interfaces/Ioption';
import {fetchNewYorkTimesNews} from "store/slices/newsNewYorkTImesSlice";
import useNewsSourceSelection from "hooks/useNewsSourceSelection";
import {
    StyledHome,
    StyledPreferencesWrapper,
    StyledSelectionWrapper,
    StyledPreferenceWrapper,
    StyledTitle,
    StyledLabel,
    StyledCheckBox
} from './StyledHome';


const Home = () => {
    const dispatch = useAppDispatch();
    const {state, toggleNewYorkTimes, toggleGuardian, toggleNewsApi} = useNewsSourceSelection();

    const [query, setQuery] = useState<string>('armenia');
    const [order, setOrder] = useState<Option>(ORDERS[0]);
    const [sources, setSources] = useState<string>('');
    const [range, setRange] = useState<Irange>({from: '', to: ''});

    const newsSources = useAppSelector((state: RootState) => state.newsSources);
    const news = useAppSelector((state: RootState) => state.news);
    const newsGuardian = useAppSelector((state: RootState) => state.newsGuardian);
    const newsNewYorkTimes = useAppSelector((state: RootState) => state.newsNewYorkTimes);

    useEffect(() => {
        if (state.newNewsApiSelected) {
            dispatch(fetchSources());
        }
    }, [dispatch]);


    useEffect(() => {
        if (state.newYorkTimesSelected) {
            dispatch(fetchNewYorkTimesNews({query, range}));
        }
        if (state.newNewsApiSelected) {
            dispatch(fetchNews( {query, order: order.label, sources, range}));
        }
        if (state.newGuardianSelected) {
            dispatch(fetchGuardianNews({query, range}));
        }
    }, [query, state, order, sources, range, dispatch]);

    const searchNews = (value: string) => {
        setQuery(value);
    };

    const onRangeSelected = (start: string, end: string) => {
        setRange({from: start, to: end});
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
            <Search onSearchChange={searchNews}/>
            <StyledSelectionWrapper>
                <StyledLabel>
                    <StyledCheckBox type="checkbox" checked={state.newYorkTimesSelected} onChange={toggleNewYorkTimes}/>
                    New York Times
                </StyledLabel>
                <StyledLabel>
                    <StyledCheckBox type="checkbox" checked={state.newGuardianSelected} onChange={toggleGuardian}/>
                    Guardian
                </StyledLabel>
                <StyledLabel>
                    <StyledCheckBox type="checkbox" checked={state.newNewsApiSelected} onChange={toggleNewsApi}/>
                    News API
                </StyledLabel>
            </StyledSelectionWrapper>
            <StyledPreferencesWrapper>
                <StyledPreferenceWrapper>
                    <Select
                        value={order}
                        onChange={orderSelected}
                        options={ORDERS}
                        placeholder="Order"
                    />
                </StyledPreferenceWrapper>
                {state.newNewsApiSelected &&
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
                }

                <StyledPreferenceWrapper>
                    <RangePicker onRangeSelected={onRangeSelected}/>
                </StyledPreferenceWrapper>
            </StyledPreferencesWrapper>

            {state.newNewsApiSelected &&
                <>
                    <StyledTitle>News API</StyledTitle>
                    <Articles news={news}/>
                </>
            }
            {state.newGuardianSelected &&
                <>
                    <StyledTitle>Guardian API</StyledTitle>
                    <Articles news={newsGuardian}/>
                </>
            }
            {state.newYorkTimesSelected &&
                <>
                    <StyledTitle>NewYorkTimes API</StyledTitle>
                    <Articles news={newsNewYorkTimes}/>
                </>
            }


        </StyledHome>
    );
};

export default Home;
