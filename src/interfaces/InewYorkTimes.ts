import {AbstractArticle} from "./abstractArticle";


export interface INewYorkTimesData extends AbstractArticle {
    loading: boolean,
    error: null | string,
    response: INewYorkTimes
}

export interface INewYorkTimes {
    docs: INewYorkTimesDocument[];
}

export interface INewYorkTimesDocument  {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: {
        rank: number;
        subtype: string;
        caption: string | null;
        credit: string | null;
        type: string;
        url: string;
        height: number;
        width: number;
        legacy: {
            [key: string]: string;
        };
        subType: string;
        crop_name: string;
    }[];
    headline: {
        main: string;
    };
    keywords: {
        name: string;
        value: string;
        rank: number;
        major: string;
    }[];
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    subsection_name: string;
    byline: {
        original: string;
        person: {
            firstname: string;
            middlename: string | null;
            lastname: string;
            qualifier: string | null;
            title: string | null;
            role: string;
            organization: string;
            rank: number;
        }[];
        organization: string | null;
    };
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
}


