import styled from 'styled-components';

import final from '../../assets/final.png';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${final});
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  p {
    width: 80%;
    color: ${({ theme }) => theme.palette.primary.dark};
    text-align: center;
    line-height: 1;
    font-weight: 600;
  }
`;

export const Images = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 100px;
    margin: 10px;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(70%);
    }
  }
`;
