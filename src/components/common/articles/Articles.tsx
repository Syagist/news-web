import React from 'react';
import {StyledArticles} from './StyledArticles';
import Article from 'components/common/article/Article';
import NoDataView from "components/common/noDataView/NoDataView";
import {IGuardianArticle, IGuardianNews} from "interfaces/Iguardian";
import {INewYorkTimesData, INewYorkTimesDocument} from "interfaces/InewYorkTimes";
import {IArticle, INews} from "interfaces/Inews";
import Skeletons from "./Skeletons";

interface ArticlesProps {
    news: INews | IGuardianNews | INewYorkTimesData;
}

const Articles: React.FC<ArticlesProps> = ({news}) => {
    const isGuardianNews = 'response' in news && news.response && 'results' in news.response;
    const isNewYorkTimesData = 'response' in news && news.response && 'docs' in news.response;
    const isNewsApiData = 'articles' in news && news.articles && news.articles.length > 0;

    if (news.error) {
        return <ErrorView errorMessage={news.error}/>;
    }

    if (news.loading) {
        return <Skeletons/>;
    }


    if (isGuardianNews) {
        const guardianNews = news as IGuardianNews;
        return <ArticleList articles={guardianNews!.response!.results} source={'guardian'}/>
    }
    if (isNewYorkTimesData) {
        const newYorkTimesData = news as INewYorkTimesData;
        return <ArticleList articles={newYorkTimesData.response.docs} source={'newYorkTimesApi'}/>;
    }

    if (isNewsApiData) {
        const newsApiData = news as INews;
        return <ArticleList articles={newsApiData.articles!} source={'newsApi'}/>
    }

    return <NoDataView title={'No data'} description={'Sorry there is no news by your search'}/>;
}
const ErrorView = ({errorMessage}: { errorMessage: string }) => {
    return <div>{errorMessage}</div>;
};


interface ArticleListProps {
    articles: IArticle[] | IGuardianArticle[] | INewYorkTimesDocument[];
    source: 'guardian' | 'newsApi' | 'newYorkTimesApi';
}

const ArticleList: React.FC<ArticleListProps> = ({articles, source}) => {

    const generateRandomString = () => Math.random().toString();


    const getKey = (article: IArticle | IGuardianArticle | INewYorkTimesDocument) => {
        switch (source) {
            case "newsApi":
                const newsApiArticle = article as IArticle;
                if (newsApiArticle.url.includes('removed')) {
                    return generateRandomString();
                }
                return newsApiArticle.url;
            case 'guardian':
                const guardianArticle = article as IGuardianArticle;
                return guardianArticle.id;

            case 'newYorkTimesApi':
                const newYorkTimesArticle = article as INewYorkTimesDocument;
                return newYorkTimesArticle._id;
            default:
                return generateRandomString();

        }
    };

    return (
        <StyledArticles>
            {articles.map((article) => (
                <Article
                    key={getKey(article)}
                    articleSrc={article}
                    source={source}
                />
            ))}
        </StyledArticles>
    );
};

export default Articles;
