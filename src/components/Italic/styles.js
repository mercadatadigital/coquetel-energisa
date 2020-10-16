import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  font-style: italic;
  font-size: 12px;
  text-align: ${({ justify }) => (justify ? 'default' : 'center')};
  width: 95%;
  margin-top: 5px;
`;
