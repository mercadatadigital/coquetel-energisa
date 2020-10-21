import styled from 'styled-components';

export const Maincontent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  box-shadow: 1px 1px 5px #0005;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex-direction: column;

  padding: 10px;
  margin: 0 10px;
  min-height: 560px;

  /* max-height: 560px; */
  background: linear-gradient(0deg, #fff 97%, #d4d721 3%);
`;
