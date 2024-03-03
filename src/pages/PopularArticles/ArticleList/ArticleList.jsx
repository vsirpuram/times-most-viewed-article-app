/* eslint-disable react/prop-types */
import React from 'react';
import Article from '../Article';

function ArticlesList({ articles }) {
  const { results } = articles;

  return (
    <div>
      {results.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesList;
