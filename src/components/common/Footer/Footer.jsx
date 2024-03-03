/* eslint-disable react/prop-types */
import React from 'react';
import ModuleCss from './Footer.module.scss';

function Footer({ children }) {
  return <div className={ModuleCss.footerLayout}>{children}</div>;
}

export default Footer;
