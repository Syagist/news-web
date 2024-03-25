import {AbstractArticle} from "./abstractArticle";

interface ISource {
    id: string | null;
    name: string;
}

export interface IArticle extends AbstractArticle {
    source: ISource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | undefined;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string | null;
    totalResults: number | null;
    articles: IArticle[] | null;
    loading: boolean,
    error: null | string
}