import React from 'react';
import { GiVanillaFlower } from 'react-icons/gi';

import * as S from './styles';

function Title({ children }) {
  return (
    <S.Container>
      <GiVanillaFlower />
      <h1>{children}</h1>
      <GiVanillaFlower />
    </S.Container>
  );
}

export default Title;
