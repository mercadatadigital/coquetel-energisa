import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import CircularButton from '../../components/CircularButton';
import Subtitle from '../../components/Subtitle';
import TextBlue from '../../components/TextBlue';
import Italic from '../../components/Italic';
import Button from '../../components/Button';

import image from '../../assets/page5.png';

function Embaralhadas1() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/4')} direction="back" />
      <Content>
        <Header>EMBARALHADOS</Header>
        <S.Container>
          <Italic>
            Desembaralhe as sílabas e saiba o que deve haver entre empregadores
            e empregados para se estabelecer uma cultura de segurança do
            trabalho em uma empresa.
          </Italic>
          <S.Content>
            <p className="pa">PA</p>
            <p className="ça">ÇA</p>
            <p className="con">CON</p>
            <p className="cia">CIA</p>
            <img src={image} alt="homem-caindo" />
            <p className="fi">FI</p>
            <p className="an">AN</p>
            <p className="trans">TRANS</p>
            <p className="ren">RÊN</p>
          </S.Content>
          <Button last onClick={() => goPage('embaralhadas1')}>
            Jogar!
          </Button>
        </S.Container>
      </Content>
      <CircularButton onClick={() => goPage('5')} />
    </Container>
  );
}

export default Embaralhadas1;
