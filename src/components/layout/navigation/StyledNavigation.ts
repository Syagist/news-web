import styled from 'styled-components';
import {ARTICLE_DATE_COLOR, FOOTER_BG_COLOR} from "styles/AppColors";
import {Link} from "react-router-dom";

export const StyledNavigation = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: ${ARTICLE_DATE_COLOR};
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    padding: 10px 20px;
    z-index: 300;
`;

export const StyledNavigationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    
    @media (max-width: 768px) {
        position: absolute;
        left: -100%;
        top: 0;
        width: 100vw;
        height: 100vh;
        transition: left 0.3s ease;
        z-index: 100;
        background: ${ARTICLE_DATE_COLOR};
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

export const StyledLink = styled(Link)`
    color: ${FOOTER_BG_COLOR};
    margin: 0 10px;

    @media (max-width: 768px) {
        margin: 10px 20px;
        padding: 10px 0;
        width: 100%;
    }
`;

export const StyledNavigationBurger = styled.button`
    display: none;
    z-index: 200;
    
    position: relative;
    @media (max-width: 768px) {
        display: flex;
        width: 44px;
        height: 44px;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

