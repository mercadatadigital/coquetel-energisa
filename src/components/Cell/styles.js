import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
  cursor: pointer;

  background-color: ${({ selected, theme }) =>
    selected ? '#A7A7A7' : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? theme.palette.secondary.contrastText : '#000'};

  ${({ finished, theme }) => {
    if (finished) {
      return `
        background-color: ${theme.palette.primary.main}};
        color: ${theme.palette.secondary.contrastText};
      `;
    }
  }}

  transition: all .2s;

  :hover {
    background-color: ${({ selected, theme }) =>
      selected ? '#A7A7A7' : '#a8a8a8'};
    filter: brightness(80%);
  }
`;
