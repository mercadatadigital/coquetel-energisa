import styled from 'styled-components';
import { SCREEN_SIZES } from '../../utils';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbee;
  width: 100%;
  margin-bottom: 10px;
`;
export const BoxGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  /* background: red; */
  /* #fbfbee */
  /* width: 80%; */
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
  margin-left: 2px;

  @media (min-width: ${SCREEN_SIZES.sm}) {
    margin-left: 2px;
  }

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
