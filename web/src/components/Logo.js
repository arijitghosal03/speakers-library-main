import React from 'react';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <ul>
        <li className="logo_img">
          <img src={require('../images/logo.png').default} alt="" />
        </li>
        <li className="logo__text">Speaker's Library </li>
      </ul>
    </LogoStyles>
  );
}

export default Logo;
