/* eslint-disable react/prop-types */
import React from 'react';

import ModuleCss from './Image.module.scss';

function Image({ src, alt, showCaption }) {
  return (
    <picture className={[ModuleCss.imgWrapper]} title={alt}>
      <img className={ModuleCss.img} src={src} alt={alt} />
      {showCaption && <div className={ModuleCss.caption}>{alt}</div>}
    </picture>
  );
}

export default Image;
