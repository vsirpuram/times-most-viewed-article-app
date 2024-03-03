/* eslint-disable react/prop-types */
import React from 'react';

import ModuleCss from './TextLabel.module.scss';

function TextLabel({ text, className }) {
  return <div className={[ModuleCss.textWrapper, className].join(' ')}>{text}</div>;
}

export default TextLabel;
