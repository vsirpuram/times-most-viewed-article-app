/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../../components/common/Card';
import Image from '../../../components/ui/Image/Image';

import ModuleCss from './Article.module.scss';

function Articles({ article }) {
  const {
    title,
    abstract,
    published_date: publishedDate,
    byline,
    section,
    media,
  } = article;
  const { caption } = media;

  const articleImage = media[0] ? media[0]['media-metadata'][0]?.url : '';

  return (
    <Card>
      <div className={ModuleCss.articleWrapper}>
        <span className={ModuleCss.articlePublishedDate}>{publishedDate}</span>
        <div className={ModuleCss.articleContent}>
          <h2>{title}</h2>
          <p>{abstract}</p>
          <span>{byline}</span>
          <span>{section}</span>
        </div>
        <Image src={articleImage} alt={caption} showCaption />
      </div>
    </Card>
  );
}

export default Articles;
