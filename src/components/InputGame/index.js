import React from 'react';
import * as S from './styles';

export default React.forwardRef(
  ({ disabled, onChange, success, value }, ref) => (
    <S.InputGame success={success}>
      <input
        ref={ref}
        type="text"
        disabled={disabled}
        data-ls-module="charCounter"
        maxLength="1"
        onChange={onChange}
        value={value}
      />
    </S.InputGame>
  )
);
