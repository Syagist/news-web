import React from 'react';
import {StyledFooter, StyledFooterLink, StyledFooterTitle} from "./StyledFooter";

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <StyledFooterTitle>This news app made Samvel Grigoryan</StyledFooterTitle>
                <StyledFooterLink target="_blank"
                                  href="https://www.linkedin.com/in/samvel-grigoryan-128436158/">Linkedin
                    profile</StyledFooterLink>
                <StyledFooterLink target="_blank"
                                  href="https://github.com/Syagist/">Github profile</StyledFooterLink>
                <StyledFooterLink target="_blank" href="https://gitlab.com/samvel.grigoryan.psy">Gitlab
                    profile</StyledFooterLink>
            </div>
        </StyledFooter>
    );
};

export default Footer;