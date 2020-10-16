import React from 'react';

import * as S from './styles';

function Cell({
  letter,
  selected = false,
  finished = false,
  onClick,
  translate,
}) {
  return (
    <S.Container selected={selected} onClick={onClick} finished={finished}>
      {letter}
    </S.Container>
  );
}

export default Cell;
