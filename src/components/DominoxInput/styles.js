import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
  disabled: props.disable || props.invisible || props.complete,
  maxLength: '1',
}))`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  border-radius: 0;

  border: ${({ disable, invisible, theme }) =>
    disable || invisible ? 'none' : `1px solid black`};
  color: ${({ theme, disable }) =>
    disable ? '#fff' : theme.palette.primary.main};

  ${({ success, complete }) => {
    if (success === undefined || success === null) {
      if (complete) {
        return 'background-color: #0001';
      }
      return 'background-color: transparent;';
    }
    if (success) {
      return 'background-color: rgba(0, 255, 0, .2);';
    }
    return 'background-color: rgba(255, 0, 0, .2);';
  }};

  background: ${({ disable }) => disable && '#fbfbee'};
`;
