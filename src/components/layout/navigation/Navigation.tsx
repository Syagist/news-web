import React from 'react';
import {StyledNavigation} from "./StyledNavigation";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <StyledNavigation>
            <Link key={'Home'} to={'Home'}>Home</Link>
            <Link key={'new-york-times'} to={'new-york-times'}> New Yok Times</Link>
            <Link key={'guardian'} to={'guardian'}>Guardian</Link>
        </StyledNavigation>
    );
};

export default Navigation;