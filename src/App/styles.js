import styled from 'styled-components';
import { SCREEN_SIZES } from '../utils';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-width: 510px;

  div.logo-container {
    position: absolute;
    left: 30px;
    top: 10px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    z-index: -1;

    @media (max-width: ${SCREEN_SIZES.lg}) {
      position: relative;
      left: 0;
    }
  }

  img.logo {
    height: 100px;
    max-width: 300px;
  }

  img.logo-coquetel {
    margin-right: 10px;
  }

  img.logo-parceiro {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 160px;
    background: #d4d721;
    z-index: -1;
  }

  p.mercadata {
    margin-top: 10px;
    font-weight: 300;
    font-size: 15px;
    font-style: italic;
    padding: 0;
  }
`;
