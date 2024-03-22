import React, {useEffect} from 'react';
import {useAppDispatch} from "../../store/store";
import {fetchSections} from "../../store/slices/guardianSectionsSlice";
import {fetchArchives} from "../../store/slices/archiveSlice";

const NewYorkTimes = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArchives());
    }, []);
    useEffect(() => {
        console.log()
    }, [dispatch]);
    console.log()
    return (
        <div>
            NewYorkTimes
        </div>
    );
};

export default NewYorkTimes;