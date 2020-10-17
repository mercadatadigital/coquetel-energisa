import styled, {css} from 'styled-components';

export const Image = styled.img`
  margin: 5px;

  height: 40px;
  transition: all .2s;
  cursor: pointer;

  :hover{
    filter: brightness(90%);
  }

  ${({selected}) => selected && css`
    filter: brightness(70%);
  `}

  ${({win}) => win && css`
    :hover{
      filter: brightness(50%);
    }

    filter: brightness(50%);
    cursor: default;
  `}
`;
