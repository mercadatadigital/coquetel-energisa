import React, { forwardRef } from 'react';

import * as S from './styles';

function handleFocus(event) {
  event.target.select();
}

function DominoxInput(
  { value, disable, onChange, success, invisible, complete },
  ref
) {
  return (
    <S.Input
      onFocus={handleFocus}
      value={value}
      complete={complete}
      invisible={invisible}
      type="text"
      ref={ref}
      disable={disable}
      onChange={onChange}
      success={success}
    />
  );
}

export default forwardRef(DominoxInput);
