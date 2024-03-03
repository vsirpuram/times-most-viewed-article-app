/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../../components/common/Card';
import Image from '../../../components/ui/Image/Image';
import formatDate from '../../../utils/helpers';

import ModuleCss from './Article.module.scss';

function Articles({ article }) {
  const {
    url,
    title,
    abstract,
    published_date: publishedDate,
    byline,
    media,
  } = article;
  const { caption } = media;

  const articleImage = media[0] ? (
    media[0]['media-metadata'][0]?.url
  ) : (
    <Image
      src="/noImage.webp"
      alt={caption}
      className={ModuleCss.imgHeight}
    />
  );

  return (
    <Card className={ModuleCss.articleCard}>
      <a href={url} className={ModuleCss.articleLink}>
        <li className={ModuleCss.articleWrapper}>
          <span className={ModuleCss.articlePublishedDate}>
            {formatDate(publishedDate)}
          </span>
          <div className={ModuleCss.articleContent}>
            <h2 className={ModuleCss.articleTitle}>{title}</h2>
            <p className={ModuleCss.articleAbstract}>{abstract}</p>
            <p className={ModuleCss.articleByline}>{byline}</p>
          </div>
          <div className={ModuleCss.articleImage}>
            <Image
              src={articleImage}
              alt={caption}
              className={ModuleCss.imgHeight}
            />
          </div>
        </li>
      </a>
    </Card>
  );
}

export default Articles;
