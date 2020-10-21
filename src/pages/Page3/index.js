import React, { useState, useRef } from 'react';
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
import icon from '../../assets/plus.svg';

function Page1() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/1')} direction="back" />
      <Content>
        <Header src={icon}>CAÇA-PALAVRAS</Header>
        <S.Container>
          <Italic>
            Procure e marque, no diagrama de letras, as palavras em destaque no
            texto.
          </Italic>
          <Subtitle>Análise Preliminar de risco</Subtitle>
          <Paragraph>
            Infelizmente, o <TextBlue>ACIDENTE</TextBlue> de trabalho é uma das
            principais causas de <TextBlue>MORTE</TextBlue> no Brasil. Para que
            uma <TextBlue>EMPRESA</TextBlue> possa construir um ambiente seguro
            para seus funcionários, a melhor opção é conhecer e distribuir para
            toda a <TextBlue>EQUIPE</TextBlue> a Análise Preliminar de Riscos.
            Conhecida pela sigla APR, ela é um <TextBlue>ESTUDO </TextBlue>
            detalhado sobre todas as etapas do <TextBlue>TRABALHO</TextBlue> a
            ser executado em determinado local. Tem como objetivo identificar
            <TextBlue> PROBLEMAS</TextBlue> ou <TextBlue>RISCOS</TextBlue> para
            as <TextBlue>PESSOAS</TextBlue>, para o meio
            <TextBlue> AMBIENTE</TextBlue>, para o
            <TextBlue> PATRIMÔNIO </TextBlue>e para a{' '}
            <TextBlue>IMAGEM </TextBlue>e os serviços da empresa. A APR deve ser
            sempre desenvolvida pelos colaboradores e funcionários de
            <TextBlue> SEGURANÇA</TextBlue> do trabalho de forma integrada,
            listando todas as informações sobre a<TextBlue> ATIVIDADE</TextBlue>
            , seus riscos, efeitos que podem ser gerados, sua
            <TextBlue> GRAVIDADE</TextBlue> e as medidas corretivas ou
            preventivas para evitar acidentes e proteger os funcionários.
          </Paragraph>
          <Button last onClick={() => goPage('caca-palavras1')}>
            Jogar!
          </Button>
        </S.Container>
      </Content>
      <CircularButton onClick={() => goPage('4')} />
    </Container>
  );
}

export default Page1;
