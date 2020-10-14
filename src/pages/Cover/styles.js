import styled from 'styled-components';

import cover from '../../assets/capa-energisa.png';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${cover});
  background-clip: content-box;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  height: 560px;
`;

export const MainContent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  box-shadow: 1px 1px 5px #0005;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;
