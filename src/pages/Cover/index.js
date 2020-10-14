import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import CircularButton from '../../components/CircularButton';

function Cover() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };
  return (
    <Container>
      <CircularButton disabled direction="back" />
      <S.MainContent>
        <S.Background />
      </S.MainContent>
      <CircularButton onClick={() => goPage('1')} />
    </Container>
  );
}

export default Cover;
