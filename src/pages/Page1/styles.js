import styled from 'styled-components';

export const BoxGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
