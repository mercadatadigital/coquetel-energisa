import React from 'react';
import { Box, AlignContainer } from './styles';

function Container({ children }) {
  return (
    <AlignContainer>
      <Box>{children}</Box>
    </AlignContainer>
  );
}

export default Container;
