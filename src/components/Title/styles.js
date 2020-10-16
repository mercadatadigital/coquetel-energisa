import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: ${({ theme }) => theme.palette.primary.main};
    margin: 0 10px;
    text-transform: uppercase;
  }

  svg {
    font-size: 24px;
    color: #f6bf02;
  }
`;
