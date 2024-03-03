/* eslint-disable react/prop-types */
import React from 'react';

import ModuleCss from './Main.module.scss';

function Main({ children }) {
  return <main className={ModuleCss.mainLayout}>{children}</main>;
}

export default Main;
