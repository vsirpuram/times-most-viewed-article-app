/* eslint-disable react/prop-types */
import React from 'react';
import ArticlesList from './ArticleList/ArticleList';
import TextLabel from '../../components/ui/TextLabel/TextLabel';
import Loader from '../../components/ui/Loader';

import useGetPopularArticles from '../../hooks/useGetPopularArticles';

import ModuleCss from './PopularArticles.module.scss';

const TIME_PERIOD_OF_ARTICLES = 1;

function PopularArticles() {
  const [articles, isLoading] = useGetPopularArticles(TIME_PERIOD_OF_ARTICLES);

  return (
    <div className={ModuleCss.popularArticles}>
      {isLoading ? <Loader /> : (
        <>
          <TextLabel text="Popular Articles" className={ModuleCss.popularArticlesText} />
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
