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
    const hasGuardianData = 'response' in news && news.response !== null && news.response.results.length > 0;
    const hasNewsApiData = 'articles' in news && news.articles !== null && news.articles.length > 0;

    if (news.error) {
        return <ErrorView/>;
    }

    if (news.loading) {
        return <SkeletonList/>;
    }


    if (hasGuardianData) {
        return <ArticleList articles={news.response!.results} source={'guardian'}/>
    }

    if (hasNewsApiData) {
        return <ArticleList articles={news.articles!} source={'newsApi'}/>
    }

    return <EmptyView/>;
}


const EmptyView: React.FC = () => {
    return <div>No data found</div>;
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
    articles: IArticle[] | IGuardianArticle[];
    source: 'guardian' | 'newsApi';
}

const ArticleList: React.FC<ArticleListProps> = ({articles, source}) => {
    return (
        <StyledArticles>
            {articles.map((article) => (
                <Article
                    key={source === 'newsApi' ? (article as IArticle).url : (article as IGuardianArticle).id}
                    articleSrc={article}
                    source={source}
                />
            ))}
        </StyledArticles>
    );
};

export default Articles;
