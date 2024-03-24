import { createGlobalStyle } from 'styled-components';

const StyledContainer = createGlobalStyle`

    body {
        font-family: 'Gilroy', sans-serif;
        padding-top: 60px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.8;
        }
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${require('assets/fonts/Gilroy-Bold.woff2')}) format('woff2'),
        url(${require('assets/fonts/Gilroy-Bold.woff')}) format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${require('assets/fonts/Gilroy-Light.woff2')}) format('woff2'),
        url(${require('assets/fonts/Gilroy-Light.woff')}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${require('assets/fonts/Gilroy-Medium.woff2')}) format('woff2'),
        url(${require('assets/fonts/Gilroy-Medium.woff')}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${require('assets/fonts/Gilroy-Regular.woff2')}) format('woff2'),
        url(${require('assets/fonts/Gilroy-Regular.woff')}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${require('assets/fonts/Gilroy-Semibold.woff2')}) format('woff2'),
        url(${require('assets/fonts/Gilroy-Semibold.woff')}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url(${require('assets/fonts/Gilroy-Thin.woff2')}) format('woff2'),
        url(${require('assets/fonts/Gilroy-Thin.woff')}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
`;

export default StyledContainer;
