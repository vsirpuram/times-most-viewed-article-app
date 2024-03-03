import React from 'react';

import Card from '../../../components/common/Card';

function Articles({ article }) {
  const { title } = article;

  return (
    <Card>
      <h2>{title}</h2>
    </Card>
  );
}

export default Articles;
