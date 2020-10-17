import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  color: black;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    float: center;
    margin-right: 2rem;
    border-radius: 50%;
    -webkit-shape-outside: circle();
    shape-outside: circle();
  }
`;

export const BoxGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  background: #e1e1e1;
  width: 100%;
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  &:first-child {
    margin: 0;
  }
`;

export const Textimage = styled.div`
  img {
    float: left;
    width: 50%;
    margin: 20px 20px 20px 0;
  }

  margin-bottom: 10px;
`;

export const Bullet = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
`;
