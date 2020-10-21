import styled, { css } from 'styled-components';
import { SCREEN_SIZES } from '../../utils';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.div`
  img {
    width: 180px;
  }
  margin: 10px auto;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Retangles = styled.div`
  width: 100%;
  display: flex;
  margin: 5px auto;
  margin-top: 20px;
`;

export const SameColor = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Retangle = styled.div`
  flex: 1;
  min-width: 40px;
  height: 30px;
  border: 4px solid ${(props) => props.color};

  /* @media (min-width: ${SCREEN_SIZES.sm}) {
    min-width: 48px;
  } */

  cursor: pointer;
  transition: filter 0.2s;
  :hover {
    filter: brightness(70%);
  }

  img.win-image {
    width: 100%;
    min-height: 30px;
    display: none;
    background-color: #fff;
  }

  ${({ err }) =>
    err &&
    css`
      background-color: rgba(255, 0, 0, 0.5);
      cursor: pointer;
      transition: filter 0.2s;
      :hover {
        filter: brightness(90%);
      }
    `}

  ${({ win }) =>
    win &&
    css`
      border: 0;

      img.win-image {
        display: block;
      }
    `}
`;
