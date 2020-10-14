import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Button } from './styles';

function CircularButton({ disabled, onClick, direction }) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {direction === 'back' ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </Button>
  );
}

export default CircularButton;
