import React from 'react';
import {IArticle} from "store/slices/newsSlice";
import articleDefault from 'assets/images/article-default.jpg'; // Adjust the path as per your project structure
import {
    ArticleContent,
    ArticleContentWrapper,
    ArticleDescription, ArticleImage,
    ArticleImageWrapper,
    ArticleLink,
    ArticlePublishDate,
    ArticleTitle
} from "./StyledArticle";

interface ArticleProps {
    article: IArticle;
}

const Article: React.FC<ArticleProps> = ({article}) => {
    const {title, description, url, urlToImage, publishedAt} = article;

    const openArticleDetail = () => {

    };

    return (
        <ArticleContent>
            <ArticleLink onClick={openArticleDetail}>
                <ArticleImageWrapper>
                    { urlToImage ?
                        <ArticleImage src={urlToImage} alt={title} /> :
                        <ArticleImage src={articleDefault} alt={title} />
                    }
                </ArticleImageWrapper>
                <ArticleContentWrapper>
                    <ArticleTitle>{title}</ArticleTitle>
                    <ArticleDescription>{description}</ArticleDescription>
                    <ArticlePublishDate>{new Date(publishedAt).toISOString().slice(0, 10)}</ArticlePublishDate>
                </ArticleContentWrapper>
            </ArticleLink>
        </ArticleContent>
    );
};

export default Article;