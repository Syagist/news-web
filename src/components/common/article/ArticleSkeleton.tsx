import React from 'react';
import {
    ArticleContent,
    ArticleContentWrapper,
    ArticleDescriptionSkeleton,
    ArticleImageSkeleton,
    ArticleImageWrapper,
    ArticleLink,
    ArticleTitleSkeleton
} from "./StyledArticle";

const ArticleSkeleton = () => {
    return (
        <ArticleContent>
            <ArticleLink>
                <ArticleImageWrapper>
                    <ArticleImageSkeleton/>
                </ArticleImageWrapper>
                <ArticleContentWrapper>
                    <ArticleTitleSkeleton></ArticleTitleSkeleton>
                    <ArticleDescriptionSkeleton></ArticleDescriptionSkeleton>
                </ArticleContentWrapper>
            </ArticleLink>
        </ArticleContent>
    );
};

export default ArticleSkeleton;