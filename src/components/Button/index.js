import React from 'react';

import * as S from './styles';

function Button({ last, children, onClick }) {
  return (
    <S.Container last={last} onClick={onClick}>
      {children}
    </S.Container>
  );
}

export default Button;
