import React from 'react';

import * as S from './styles';

function Italic({ children, justify }) {
  return <S.Container justify={justify}>{children}</S.Container>;
}

export default Italic;
