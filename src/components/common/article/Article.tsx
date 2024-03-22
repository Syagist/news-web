import React from 'react';
import {StyledArticle} from "./StyledArticle";
import {IArticle} from "store/slices/newsSlice";

interface ArticleProps {
    article: IArticle;
}

const Article: React.FC<ArticleProps> = ({article}) => {
    const {source, author, title, description, url, urlToImage, publishedAt, content} = article;
    return (
        <StyledArticle>
            {source.name} <br/>
            {author || ''}<br/>
            {title}<br/>
            {description || ''}<br/>
            <img src={urlToImage} alt={title}/>
            {urlToImage || ''}<br/>
            {publishedAt}<br/>
            {content}
        </StyledArticle>
    );
};

export default Article;