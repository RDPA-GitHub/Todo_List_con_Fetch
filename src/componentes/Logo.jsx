import React from 'react';
import RP from '../img/Logo.png';

const Logo = () => {
  return (
    <div className="container-logo">
      <img
        src={RP}
        alt="Logo RP"
        className="logoRP"
      />
    </div>
  );
}

export default Logo;