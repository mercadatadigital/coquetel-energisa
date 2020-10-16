import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import CircularButton from '../../components/CircularButton';
import Italic from '../../components/Italic';
import TextBlue from '../../components/TextBlue';

function Page1() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/2')} direction="back" />
      <Content>
        <Header>ANÁLISE PRELIMINAR DE RISCO</Header>
        <S.Textimage>
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
            <TextBlue> AMBIENTE </TextBlue>, para o
            <TextBlue>PATRIMÔNIO</TextBlue>e para a <TextBlue>IMAGEM </TextBlue>
            e os serviços da empresa. A APR deve ser sempre desenvolvida pelos
            colaboradores e funcionários de
            <TextBlue> SEGURANÇA</TextBlue> do trabalho de forma integrada,
            listando todas as informações sobre a<TextBlue> ATIVIDADE</TextBlue>
            , seus riscos, efeitos que podem ser gerados, sua
            <TextBlue> GRAVIDADE</TextBlue> e as medidas corretivas ou
            preventivas para evitar acidentes e proteger os funcionários.
          </Paragraph>
        </S.Textimage>
      </Content>
      <CircularButton onClick={() => goPage('4')} />
    </Container>
  );
}

export default Page1;
