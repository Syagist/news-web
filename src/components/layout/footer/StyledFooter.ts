import styled from 'styled-components';
import {FOOTER_BG_COLOR, LINK_COLOR} from "styles/AppColors";

export const StyledFooter = styled.footer`
    padding: 15px 20px 10px;
    background: ${FOOTER_BG_COLOR};
    color:  ${LINK_COLOR};`
;

export const StyledFooterTitle = styled.div`
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    margin-bottom: 10px;`
;

export const StyledFooterLink = styled.a`
    font-size: 12px;
    line-height: 14px;
    display: block;
    width: fit-content;
    padding-bottom: 5px;
    margin-bottom: 5px;`
;


