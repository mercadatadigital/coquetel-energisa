import React from 'react';
import * as S from './styles';

function Header({ children }) {
  return (
    <>
      <S.Mainheader>{children}</S.Mainheader>
    </>
  );
}

export default Header;
