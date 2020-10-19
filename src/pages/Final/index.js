import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';

import CircularButton from '../../components/CircularButton';

import appStore from '../../assets/app-store.png';
import googlePlay from '../../assets/google-play.png';

function Final() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(`/${page}`);
  };

  return (
    <Container>
      <CircularButton direction="back" onClick={() => goPage('9')} />
      <S.MainContent>
        <S.Background>
          <S.Content>
            <p>Baixa agora nosso aplicativo e jogue de onde você quiser!</p>
            <S.Images>
              <a href="https://www.apple.com/br/ios/app-store/" target="blank">
                <img src={appStore} alt="Logo Apple Store" />
              </a>
              <a href="https://play.google.com/store/" target="blank">
                <img src={googlePlay} alt="Google Play" />
              </a>
            </S.Images>
          </S.Content>
        </S.Background>
      </S.MainContent>
      <CircularButton disabled />
    </Container>
  );
}

export default Final;
