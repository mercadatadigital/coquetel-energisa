import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 560px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  color: #000;
`;

export const Words = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;

  p {
    color: #000;
    margin-bottom: 10px;
    margin-top: 0;
    text-align: justify;

    span {
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* background: red; */
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
`;
