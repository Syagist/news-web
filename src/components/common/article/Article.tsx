import React from 'react';
import { IArticle } from "store/slices/newsSlice";
import articleDefault from 'assets/images/article-default.jpg';
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
import { IGuardianArticle } from "../../../store/slices/newsGuardianSlice";

interface ArticleProps {
    source: 'guardian' | 'newsApi';
    articleSrc: IArticle | IGuardianArticle;
}

const Article: React.FC<ArticleProps> = ({ articleSrc, source }) => {
    let article: {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
    } = {
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: ''
    };

    if (source === 'guardian') {
        const guardianArticle = articleSrc as IGuardianArticle;
        article = {
            title: guardianArticle.webTitle,
            description: guardianArticle.fields.trailText,
            url: guardianArticle.webUrl,
            urlToImage: guardianArticle.fields.thumbnail,
            publishedAt: guardianArticle.webPublicationDate
        };
    }

    if (source === 'newsApi') {
        const newsApiArticle = articleSrc as IArticle;
        article = {
            title: newsApiArticle.title,
            description: newsApiArticle.description ?? '',
            url: newsApiArticle.url,
            urlToImage: newsApiArticle.urlToImage ?? '',
            publishedAt: newsApiArticle.publishedAt ?? ''
        };
    }

    const openArticleDetail = () => {
    };

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
