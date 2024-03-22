import React, {useEffect} from 'react';
import {fetchSections} from "store/slices/guardianSectionsSlice";
import {useAppDispatch} from "store/store";

const Guardian = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchSections());
    }, []);

    return (
        <div>
            Guardian
        </div>
    );
};

export default Guardian;