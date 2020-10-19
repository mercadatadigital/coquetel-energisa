import styled from 'styled-components';

export const InputGame = styled.div`
  input {
    text-align: center;
    font-weight: 600;
    font-size: 10px;
    outline: none;

    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.palette.primary.light};
    border-radius: 50%;

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
