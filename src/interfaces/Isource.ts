export interface InewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface InewsSources {
    status: string | null;
    loading: boolean,
    error: null | string,
    sources: InewsSource[];
}