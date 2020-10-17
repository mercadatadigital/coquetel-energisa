import styled from 'styled-components';
import {SCREEN_SIZES} from '../../utils/screen';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: ${({open}) => open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  div.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    padding: 10px;
    flex-direction: column;

    width: 500px;
    
    @media (max-width: ${SCREEN_SIZES.sm}){
      width: 100%;
    }
  }

  div.modal .header{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    width: 100%;
  }

  div.modal .header button {
    border: 0;
    font-size: 25px;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${({theme}) => theme.palette.secondary.main};
  }
`;