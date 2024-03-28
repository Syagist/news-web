import { useReducer, useEffect } from 'react';

interface INewsSourceSelection {
    newYorkTimesSelected: boolean;
    newGuardianSelected: boolean;
    newNewsApiSelected: boolean;
}

const initialState: INewsSourceSelection = {
    newYorkTimesSelected: true,
    newGuardianSelected: true,
    newNewsApiSelected: true
};

const counterReducer = (state: INewsSourceSelection, action: any) => {
    switch (action.type) {
        case 'TOGGLE_NEW_YORK_TIMES_SOURCE':
            return { ...state, newYorkTimesSelected: action.payload };
        case 'TOGGLE_GUARDIAN_SOURCE':
            return { ...state, newGuardianSelected: action.payload };
        case 'TOGGLE_NEWS_API_SOURCE':
            return { ...state, newNewsApiSelected: action.payload };
        default:
            return state;
    }
};

const useNewsSourceSelection = () => {
    const savedState = localStorage.getItem('newsSourceSelection');
    const initialSelectionState: INewsSourceSelection = savedState ? JSON.parse(savedState) : initialState;

    const [state, dispatch] = useReducer(counterReducer, initialSelectionState);

    useEffect(() => {
        localStorage.setItem('newsSourceSelection', JSON.stringify(state));
    }, [state]);

    const toggleNewYorkTimes = () => {
        dispatch({ type: 'TOGGLE_NEW_YORK_TIMES_SOURCE', payload: !state.newYorkTimesSelected });
    };

    const toggleGuardian = () => {
        dispatch({ type: 'TOGGLE_GUARDIAN_SOURCE', payload: !state.newGuardianSelected });
    };

    const toggleNewsApi = () => {
        dispatch({ type: 'TOGGLE_NEWS_API_SOURCE', payload: !state.newNewsApiSelected });
    };

    return {
        state,
        toggleNewYorkTimes,
        toggleGuardian,
        toggleNewsApi
    };
};

export default useNewsSourceSelection;
