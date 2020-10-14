import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils';

export const Box = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  min-width: 510px;
  padding: 0 20px;

  @media (min-width: ${SCREEN_SIZES.sm}) {
    width: 510px;
  }
`;

export const AlignContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;
