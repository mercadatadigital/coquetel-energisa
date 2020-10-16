import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.palette.primary.dark};
  outline: none;
  border: none;
  color: #fff;
  margin-top: ${({ last }) => (last ? '10px' : '0')};
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;

  transition: filter 0.2s;

  :hover {
    filter: brightness(75%);
  }
`;
