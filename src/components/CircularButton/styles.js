import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: #fff;
  border: 0;
  outline: none;
  align-self: center;
  font-size: 15px;
  transition: filter 0.2s;

  svg {
    color: #fff;
  }

  background-color: ${({ disabled }) => disabled && '#484848'};

  ${({ disabled }) =>
    !disabled &&
    `
    cursor: pointer;
    :hover{
      filter: brightness(75%);
    }
  `}
`;
