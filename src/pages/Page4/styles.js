import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fbfbee;
  text-align: left;
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
  align-items: center;
  font-size: 15px;
  text-align: center;
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
