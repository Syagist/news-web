import {Option} from "../interfaces/Ioption";

export const GUARDIAN_API = "https://content.guardianapis.com"
export const NEW_YORK_TIMES = "https://api.nytimes.com"
export const NEWS_API = "https://newsapi.org/v2"

export const REACT_APP_NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export const REACT_APP_GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

export const ORDERS:Option[] = [
    { title: 'relevancy', label: 'Relevancy' },
    { title: 'popularity', label: 'Popularity' },
    { title: 'publishedAt', label: 'Published At' }
]

export const SOURCES:Option[] = [
    { title: 'Web Api', label: 'webApi' },
    { title: 'Guardian', label: 'guardian' },
]
