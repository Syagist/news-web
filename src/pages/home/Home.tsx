import React, {useEffect} from 'react';
import {StyledHome} from "./StyledHome";
import {useAppDispatch} from "../../store/store";
import {fetchArchives} from "../../store/slices/archiveSlice";
import {fetchEverything} from "../../store/slices/everythingSlice";

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEverything());
    }, []);
    useEffect(() => {
        console.log()
    }, [dispatch]);
    return (
        <StyledHome>
            Home
        </StyledHome>
    );
};

export default Home;