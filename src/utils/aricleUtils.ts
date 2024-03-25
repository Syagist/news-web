import {IGuardianArticle} from "interfaces/Iguardian";
import {IArticle} from "interfaces/Inews";
import {AbstractArticle} from "interfaces/abstractArticle";

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
    return article;
}