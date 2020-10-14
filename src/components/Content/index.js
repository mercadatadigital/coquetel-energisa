import React from 'react';
import * as S from './styles';

function Content({children}) {
  return (
    <S.Maincontent>
      {children}
    </S.Maincontent>
  );
}

export default Content;