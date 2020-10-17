import React from 'react';

import * as S from './styles';

function SelectImage({ src, selected=false, win, onClick }) {
  return (
    <S.Image src={src} selected={selected} onClick={onClick} win={win}/>
  );
}

export default SelectImage;