import React from 'react';
import {StyledArticles} from "./StyledArticles";
import {INews} from "store/slices/newsSlice";
import Article from "components/common/article/Article";
import ArticleSkeleton from "components/common/article/ArticleSkeleton";

interface ArticlesProps {
    news: INews;
}

const Articles: React.FC<ArticlesProps> = ({news}) => {
    const {articles} = news;

    if (news.error) {
        //error popup ftr
    }

    if (!articles || articles.length === 0) {
        return (
            <StyledArticles>
                <ArticleSkeleton/>
                <ArticleSkeleton/>
                <ArticleSkeleton/>
                <ArticleSkeleton/>
                <ArticleSkeleton/>
                <ArticleSkeleton/>
            </StyledArticles>
        );
    }

    return (
        <StyledArticles>
            {
                articles?.map(article => <Article key={article.url} article={article}/>)
            }
        </StyledArticles>
    );
};

export default Articles;