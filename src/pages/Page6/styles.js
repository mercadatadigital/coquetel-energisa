import styled from 'styled-components';
import { InputGame } from '../../components/InputGame/styles';

export const Input = styled(InputGame)``;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 144px 50px 144px;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: end;
  margin-bottom: 10px;
  margin-left: 12px;
  p {
    color: black;
    font-size: 10px;
  }

  p.bold {
    font-weight: bold;
    font-size: 13px;
  }
  div.vreper {
    display: display;
    flex-direction: column;
    width: 150px;

    div.vreper-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      /* margin-bottom: 15px; */
      margin-left: 4px;

      li {
        margin: 0 2px;
      }
    }
  }

  div.rgia {
    display: display;
    flex-direction: column;
    width: 150px;
    margin-left: 80px;

    div.vreper-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      /* margin-bottom: 15px; */
      margin-left: 8px;

      li {
        margin: 0 2px;
      }
    }
  }
`;

export const TextImage = styled.div`
  margin: 10px auto;

  img {
    width: 200px;
    float: right;
    margin-left: 10px;
  }
`;

export const Image2 = styled.div`
  flex: 1;
  margin: 15px auto 0;

  img {
    height: 130px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10.5px;

  li {
    margin: 0 1.5px;
  }
`;

export const Image3 = styled.div`
  margin: 20px auto 0;

  img {
    height: 118px;
  }
`;
