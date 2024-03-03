import React from 'react';
import ArticlesList from './ArticleList/ArticleList';
import useGetPopularArticles from '../../hooks/useGetPopularArticles';

const TIME_PERIOD_OF_ARTICLES = 1;

function PopularArticles() {
  const [articles, isLoading] = useGetPopularArticles(
    TIME_PERIOD_OF_ARTICLES,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.results && articles.results.length > 0 ? (
        <ArticlesList articles={articles} />
      ) : <>No Articles Found</>}
    </div>
  );
}

export default PopularArticles;
