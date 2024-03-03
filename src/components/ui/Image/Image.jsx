/* eslint-disable react/prop-types */
import React from 'react';

import ModuleCss from './Image.module.scss';

function Image({ src, alt, className }) {
  return (
    <picture className={[ModuleCss.imgWrapper]} title={alt}>
      <img
        className={[ModuleCss.img, className].join(' ')}
        src={src}
        alt={alt}
      />
    </picture>
  );
}

export default Image;
