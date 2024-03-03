/* eslint-disable react/prop-types */
import React from 'react';
import TimesLogo from '../NyTimesLogo/TimesLogo';

function Header() {
  const logoFill = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-background-inversePrimary',
  );

  return (
    <header>
      <TimesLogo fill={logoFill} />
    </header>
  );
}

export default Header;
