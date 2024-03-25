import React from 'react';
import {StyledArticles} from './StyledArticles';
import {IArticle, INews} from 'store/slices/newsSlice';
import Article from 'components/common/article/Article';
import ArticleSkeleton from 'components/common/article/ArticleSkeleton';
import {IGuardianArticle, IGuardianNews} from "store/slices/newsGuardianSlice";

interface ArticlesProps {
    news: INews | IGuardianNews;
}

const Articles: React.FC<ArticlesProps> = ({news}) => {
    if (news.error) {
        return <ErrorView/>;
    }

    if (news.loading) {
        return <SkeletonList/>;
    }

    if ('response' in news && news.response !== null) {
        return <GuardianArticleList articles={news.response.results}/>
    }

    else if ('articles' in news && news.articles !== null) {
        return <ArticleList articles={news.articles}/>
    }

    return <ErrorView/>;

};

const ErrorView: React.FC = () => {
    return <div>Error: Failed to load articles.</div>;
};

const SkeletonList: React.FC = () => {
    const skeletonItems = Array.from({length: 6}).map((_, index) => (
        <ArticleSkeleton key={index}/>
    ));

    return <StyledArticles>{skeletonItems}</StyledArticles>;
};

interface ArticleListProps {
    articles: IArticle[];
}

interface GuardianArticleListProps {
    articles: IGuardianArticle[];
}

const ArticleList: React.FC<ArticleListProps> = ({articles}) => {
    if (!articles || articles.length === 0) {
        return <div>No articles found.</div>;
    }

    return (
        <StyledArticles>
            {articles.map((article) => (
                <Article key={article.url} articleSrc={article} source={'newsApi'}/>
            ))}
        </StyledArticles>
    );
};

const GuardianArticleList: React.FC<GuardianArticleListProps> = ({articles}) => {

    return (
        <StyledArticles>
            {articles.map((article) => (
                <Article key={article.id} articleSrc={article} source={'guardian'}/>
            ))}
        </StyledArticles>
    );
};
export default Articles;
