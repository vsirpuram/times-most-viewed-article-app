/* eslint-disable react/prop-types */
import React from 'react';
import Article from '../Article';

import ModuleCss from './ArticleList.module.scss';

function ArticlesList({ articles }) {
  const { results } = articles;

  return (
    <>
      {results.map((article) => (
        <ul key={article.id} className={ModuleCss.articleListWrapper}>
          <Article article={article} />
        </ul>
      ))}
    </>
  );
}

export default ArticlesList;
