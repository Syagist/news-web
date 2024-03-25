import {AbstractArticle} from "./abstractArticle";

interface ArticleFields {
    thumbnail: string,
    trailText: string
}

export interface IGuardianArticle extends AbstractArticle {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    fields: ArticleFields
}

export interface IGuardianNews {
    loading: boolean,
    error: null | string,
    response: {
        status: string;
        userTier: string;
        total: number;
        startIndex: number;
        pageSize: number;
        currentPage: number;
        pages: number;
        orderBy: string;
        results: IGuardianArticle[];
    } | null;
}