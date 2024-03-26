import React from 'react';
import {StyledArticles} from './StyledArticles';
import Article from 'components/common/article/Article';
import {IGuardianArticle, IGuardianNews} from "interfaces/Iguardian";
import {IArticle, INews} from "interfaces/Inews";
import NoDataView from "../noDataView/NoDataView";
import Skeletons from "./Skeletons";

interface ArticlesProps {
    news: INews | IGuardianNews;
}

const Articles: React.FC<ArticlesProps> = ({news}) => {
    const hasGuardianData = 'response' in news && news.response !== null && news.response.results.length > 0;
    const hasNewsApiData = 'articles' in news && news.articles !== null && news.articles.length > 0;

    if (news.error) {
        return <ErrorView errorMessage={news.error}/>;
    }

    if (news.loading) {
        return <Skeletons/>;
    }


    if (hasGuardianData) {
        return <ArticleList articles={news.response!.results} source={'guardian'}/>
    }

    if (hasNewsApiData) {
        return <ArticleList articles={news.articles!} source={'newsApi'}/>
    }

    return <NoDataView title={'No data'} description={'Sorry there is no news by your search'}/>;
}
const ErrorView = ({errorMessage}: {errorMessage:string}) => {
    return <div>{errorMessage}</div>;
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
