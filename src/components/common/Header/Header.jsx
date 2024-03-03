/* eslint-disable react/prop-types */
import React from 'react';
import TimesLogo from '../NyTimesLogo/TimesLogo';

import ModuleCss from './Header.module.scss';

function Header() {
  const logoFill = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-background-inversePrimary',
  );

  return (
    <header className={ModuleCss.headerLayout}>
      <section className={ModuleCss.headerContent}>
        <div className={ModuleCss.headerLogo}>
          <TimesLogo fill={logoFill} />
        </div>
      </section>
    </header>
  );
}

export default Header;
