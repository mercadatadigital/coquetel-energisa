import styled, { css } from 'styled-components';

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
`;

export const SameColor = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Retangle = styled.div`
  flex: 1;
  max-width: 75px;
  height: 50px;
  border: 4px solid ${(props) => props.color};

  img.win-image {
    width: 100%;
    min-height: 50px;
    display: none;
    background-color: #fff;
  }

  ${({ err }) =>
    err &&
    css`
      background-color: rgba(255, 0, 0, 0.5);
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
