import React from 'react';
import {StyledArticles} from "./StyledArticles";
import {IArticle} from "store/slices/newsSlice";
import Article from "components/common/article/Article";

interface ArticlesProps {
    articles: IArticle[] | null;
}

const Articles: React.FC<ArticlesProps> = ({articles}) => {
    return (
        <StyledArticles>
            {
                articles && articles.length > 0 ?
                    articles.map(article => <Article key={article.url} article={article}/>) :
                    <p>empty</p>
            }
        </StyledArticles>
    );
};

export default Articles;