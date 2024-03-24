import {css, keyframes} from "styled-components";
import {SKELETON_COLOR} from "./AppColors";

export const skeletonAnimation = keyframes`
    to {
        background-position-x: -20%;
    }
`;

export const skeletonStyles = css`
    background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, .5) 50%,
            rgba(255, 255, 255, 0) 60%
    ) ${SKELETON_COLOR};
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s ${skeletonAnimation} ease-in-out infinite;
`;
