import styled from 'styled-components';

export const InputGame = styled.div`
  input {
    text-align: center;
    font-weight: 600;
    font-size: 12px;

    width: 23px;
    height: 23px;
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: 20%;

    margin-top: 2px;
    text-transform: uppercase;

    ${({ success }) => {
      if (success === undefined || success === null) {
        return 'background-color: #fff;';
      }
      if (success) {
        return 'background-color: rgba(0, 255, 0, .2);';
      }

      return 'background-color: rgba(255, 0, 0, .2);';
    }};
  }
`;
