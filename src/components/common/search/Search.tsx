import React, { useEffect, useState, useMemo } from 'react';
import { SearchIconBox, StyledSearch, StyledSearchInput, StyledSearchWrapper } from "./StyledSearch";
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { debounce } from "lodash"

interface SearchProps {
    onSearchChange: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearchChange }) => {
    const [searchValue, setSearchValue] = useState('');

    const debouncedSearch = useMemo(() => {
        return debounce((value: string) => {
            onSearchChange(value);
        }, 300);
    }, [onSearchChange]);


    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);


    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setSearchValue(value);
        debouncedSearch(value);
    }

    return (
        <StyledSearch>
            <StyledSearchWrapper>
                <StyledSearchInput onChange={handleChange} value={searchValue || ''} />
                <SearchIconBox>
                    <SearchIcon />
                </SearchIconBox>
            </StyledSearchWrapper>
        </StyledSearch>
    );
};

export default Search;
