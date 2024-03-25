import React from 'react';
import articleDefault from 'assets/images/article-default.jpg';
import {IArticle} from "interfaces/Inews";
import {IGuardianArticle} from "interfaces/Iguardian";
import {getArticle} from "utils/aricleUtils";
import {
    ArticleContent,
    ArticleContentWrapper,
    ArticleDescription,
    ArticleImage,
    ArticleImageWrapper,
    ArticleLink,
    ArticlePublishDate,
    ArticleTitle
} from "./StyledArticle";


interface ArticleProps {
    source: 'guardian' | 'newsApi';
    articleSrc: IArticle | IGuardianArticle;
}


const Article: React.FC<ArticleProps> = ({articleSrc, source}) => {

    const openArticleDetail = () => {
    };

    const article = getArticle(source, articleSrc);

    return (
        <ArticleContent>
            <ArticleLink onClick={openArticleDetail}>
                <ArticleImageWrapper>
                    <ArticleImage src={article.urlToImage ? article.urlToImage : articleDefault} alt={article.title}/>
                </ArticleImageWrapper>
                <ArticleContentWrapper>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleDescription>{article.description}</ArticleDescription>
                    <ArticlePublishDate>{new Date(article.publishedAt).toISOString().slice(0, 10)}</ArticlePublishDate>
                </ArticleContentWrapper>
            </ArticleLink>
        </ArticleContent>
    );
};

export default Article;
