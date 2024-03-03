/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ArticlesList from './ArticleList/ArticleList';
import TextLabel from '../../components/ui/TextLabel/TextLabel';
import Loader from '../../components/ui/Loader';

import useGetPopularArticles from '../../hooks/useGetPopularArticles';

import ModuleCss from './PopularArticles.module.scss';

function PopularArticles() {
  const [articles, isLoading] = useGetPopularArticles();

  return (
    <div className={ModuleCss.popularArticles}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TextLabel
            text="Popular Articles"
            className={ModuleCss.popularArticlesText}
          />
          {articles.results && articles.results.length > 0 ? (
            <ArticlesList articles={articles} />
          ) : (
            <>No Articles Found</>
          )}
        </>
      )}
    </div>
  );
}

export default PopularArticles;
