import React from 'react';
import * as S from './styles';

function TextGreen({children, onClick, style}) {
  return <S.Colortext onClick={onClick} style={style}>
    {children}
  </S.Colortext>;
}

export default TextGreen;