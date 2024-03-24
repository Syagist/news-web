import styled from 'styled-components';
import { ARTICLE_DATE_COLOR } from 'styles/AppColors';

export const StyledSearch = styled.div`
    margin: 0 -20px;
    position: sticky;
    top: 35px;
    padding: 20px;
    background: ${ARTICLE_DATE_COLOR};
    z-index: 200;
    @media (max-width: 768px) {
        top: 53px;
        padding: 12px 20px;
    }
`;
export const StyledSearchWrapper = styled.div`
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
`;

export const StyledSearchInput = styled.input`
    padding: 10px 60px 10px 20px;
    width: 100%;
    border: 0;
    font-size: 16px;
    font-weight: 400;

    &:focus, &:focus-visible {
        border: 0;
    }
`;

export const SearchIconBox = styled.div`
    position: absolute;
    right: 6px;
    top: 0;
    width: 38px;
    height: 38px;
    padding: 8px;
    
    svg {
        width: 100%;
        height: 100%;
    }
`;