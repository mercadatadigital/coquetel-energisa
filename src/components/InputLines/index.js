import React from 'react';
import * as S from './styles';

function handleFocus(event) {
  event.target.select();
}

export default React.forwardRef(
  ({ disabled, onChange, success, value }, ref) => (
    <S.InputGame success={success}>
      <input
        onFocus={handleFocus}
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
