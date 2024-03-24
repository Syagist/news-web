import styled from 'styled-components';
import {ARTICLE_DATE_COLOR} from "styles/AppColors";
import {skeletonStyles} from "../../../styles/Animations";

export const ArticleContent = styled.div`
    flex: 0 0 33.3%;
    padding: 0 20px 20px;

    @media (max-width: 1024px) {
        flex: 0 0 50%;
    }

    @media (max-width: 768px) {
        flex: 0 0 100%;
    }
`;


export const ArticleImageWrapper = styled.div`
    width: 100%;
    flex: 1;
    overflow: hidden;
`;

export const ArticleContentWrapper = styled.div`
    flex: 0 0 118px;
    padding: 20px;
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
`;

export const ArticleImageSkeleton = styled.div`
    ${skeletonStyles};
    height: 100%;
`;

export const ArticleLink = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    min-height: 320px;

    &:hover {
        img {
            transform: scale(1.02);
        }
    }

    @media (max-width: 1440px) {
        border-radius: 14px;
    }

    @media (max-width: 1024px) {
        border-radius: 12px;
    }
`;

export const ArticleTitle = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
`;


export const ArticleTitleSkeleton = styled.div`
    min-height: 24px;
    border-radius: 4px;
    animation-delay: .05s;
    margin-bottom: 10px;
    ${skeletonStyles}
`;


export const ArticleDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;
export const ArticleDescriptionSkeleton = styled.div`
    min-height: 16px;
    border-radius: 4px;
    animation-delay: .05s;
    ${skeletonStyles}
`;
export const ArticlePublishDate = styled.span`
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    background-color: ${ARTICLE_DATE_COLOR};
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 4px 12px;
    border-radius: 12px;
`;