import React from 'react';
import * as S from './styles';

function Header({ children, src }) {
  return (
    <>
      <S.Mainheader>
        <div className="icon">
          <img src={src} />
        </div>
        <div className="text">
          <p>{children}</p>
        </div>
        <div className="filler" />
      </S.Mainheader>
    </>
  );
}

export default Header;
