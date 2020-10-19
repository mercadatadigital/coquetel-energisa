import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 560px;

  background-clip: content-box;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
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
  flex-direction: column;
  flex: 1;
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

export const Buttons = styled.div`
  display: flex;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.loading &&
    css`
      svg {
        color: #bbb;
        font-size: 56px;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
