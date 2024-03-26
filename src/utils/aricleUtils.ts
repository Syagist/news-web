import {IGuardianArticle} from "interfaces/Iguardian";
import {IArticle} from "interfaces/Inews";
import {AbstractArticle} from "interfaces/abstractArticle";
import {INewYorkTimesDocument} from "interfaces/InewYorkTimes";

export const getArticle = (source: string, articleSrc: AbstractArticle) => {
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

    switch (source) {
        case   'guardian':
            const guardianArticle = articleSrc as IGuardianArticle;
            article = {
                title: guardianArticle.webTitle,
                description: guardianArticle.fields.trailText,
                url: guardianArticle.webUrl,
                urlToImage: guardianArticle.fields.thumbnail,
                publishedAt: guardianArticle.webPublicationDate
            };
            break;
        case 'newsApi':
            const newsApiArticle = articleSrc as IArticle;
            article = {
                title: newsApiArticle.title,
                description: newsApiArticle.description ?? '',
                url: newsApiArticle.url,
                urlToImage: newsApiArticle.urlToImage ?? '',
                publishedAt: newsApiArticle.publishedAt ?? ''
            };
            break;
        case 'newYorkTimesApi':
            const newYorkTimesApiArticle = articleSrc as INewYorkTimesDocument;
            article = {
                title: newYorkTimesApiArticle.headline.main,
                description: newYorkTimesApiArticle.snippet ?? '',
                url: newYorkTimesApiArticle.web_url,
                urlToImage: 'https://www.nytimes.com/' + newYorkTimesApiArticle.multimedia[0].url ?? '',
                publishedAt: newYorkTimesApiArticle.pub_date ?? ''
            };
            break;
    }
    return article;
}