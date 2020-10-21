import styled from 'styled-components';

export const Mainheader = styled.div`
  display: flex;
  /* padding: 0 10px; */

  justify-content: center;
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};

  color: #fff;
  font-size: 16px;

  margin-bottom: 10px;

  text-align: center;
  position: relative;

  div.icon {
    display: flex;
    justify-content: flex-start;
    width: 40%;

    img {
      margin-left: 10px;
      justify-self: flex-start;
      height: 100%;
      width: 20px;
    }
  }

  div.text {
    display: flex;
    justify-content: center;
    width: 60%;
    font-family: 'Londrina Outline', cursive;
  }

  div.filler {
    display: flex;
    justify-content: flex-start;
    width: 40%;

    img {
      justify-self: flex-start;
      width: 20px;
    }
  }
`;
