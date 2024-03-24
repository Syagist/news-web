import React from 'react';
import {StyledSearch, StyledSearchInput, StyledSearchWrapper,SearchIconBox} from "./StyledSearch";
import {ReactComponent as SearchIcon} from 'assets/icons/search.svg';

interface SearchProps {
    value: string | null;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ value, onSearchChange }) => {
    return (
        <StyledSearch>
            <StyledSearchWrapper>
                <StyledSearchInput onChange={onSearchChange} value={value || ''}/>
                <SearchIconBox>
                    <SearchIcon/>
                </SearchIconBox>
            </StyledSearchWrapper>
        </StyledSearch>
    );
};

export default Search;