import React, {useState} from 'react';
import {StyledLink, StyledNavigation, StyledNavigationBurger, StyledNavigationWrapper} from "./StyledNavigation";
import {ReactComponent as BurgerIcon} from 'assets/icons/burger.svg';
import {ReactComponent as CloseIcon} from 'assets/icons/close.svg';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <StyledNavigation>
            <StyledNavigationBurger onClick={toggleNav} type="button">
                {
                    isNavOpen ? <CloseIcon/> : <BurgerIcon/>
                }
            </StyledNavigationBurger>
            <StyledNavigationWrapper style={{left: isNavOpen || window.innerWidth > 768 ? '0' : '-100vw'}}>
                <StyledLink onClick={toggleNav}  to={'/home'}>Home</StyledLink>
                <StyledLink onClick={toggleNav} to={'/about'}>About</StyledLink>
                <StyledLink onClick={toggleNav} to={'/faq'}>FAQ</StyledLink>
            </StyledNavigationWrapper>
        </StyledNavigation>
    );
};

export default Navigation;