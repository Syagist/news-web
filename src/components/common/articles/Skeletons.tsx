import React from 'react';
import {StyledArticles} from './StyledArticles';
import Skeleton from '../article/Skeleton';

const Skeletons = () => {
    const skeletonItems = Array.from({length: 6}).map((_, index) => (
        <Skeleton key={index}/>
    ));

    return <StyledArticles>{skeletonItems}</StyledArticles>;
}

export default Skeletons;
