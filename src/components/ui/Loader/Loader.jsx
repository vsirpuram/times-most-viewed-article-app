/* eslint-disable react/prop-types */
import React from 'react';

import ModuleCss from './Loader.module.scss';

function Loader() {
  return (
    <div className={ModuleCss.loaderWrapper}>
      <span className={ModuleCss.loader} />
    </div>
  );
}

export default Loader;
