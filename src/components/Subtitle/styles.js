import styled from 'styled-components';

export const Container = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 10px 0 0;
  text-transform: uppercase;

  .one {
    font-size: 23px;
  }
`;
