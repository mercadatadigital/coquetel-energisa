import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { FaUmbrella } from 'react-icons/fa';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Italic from '../../components/Italic';
import InputGame from '../../components/InputGame';
import image from '../../assets/page2.png';
import CircularButton from '../../components/CircularButton';
import icon from '../../assets/codigosecreto.svg';
import Button from '../../components/Button';

function Page1() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/')} direction="back" />
      <Content>
        <Header src={icon}>CÓDIGO SECRETO</Header>
        <S.Textimage>
          <Paragraph>
            Uma empresa centenária, a Energisa é a quinta maior empresa em
            distribuição de energia do Brasil. Como reconhecemos que o
            desempenho e o trabalho em equipe é o que garante os nossos bons
            resultados, investimos no desenvolvimento dos profissionais que
            trabalham conosco. Somos cerca de 19 mil colaboradores internos e
            terceirizados.
            <img src={image} alt="imagem 1" />
            Com tanta gente trabalhando conosco, temos o orgulho de ter um
            programa de prevenção de acidentes de trabalho cuidadoso e
            eficiente. Pensando sempre na saúde e bem-estar de todos.
          </Paragraph>

          <Paragraph>
            Você sabia que, tomando algumas medidas básicas podemos ter mais
            qualidade de vida? O Brasil vem enfrentando aumento expressivo dos
            índices de sobrepeso e obesidade. Em média, o excesso de peso
            acomete um a cada dois adultos e uma a cada três crianças.
          </Paragraph>
        </S.Textimage>
        <Button last onClick={() => goPage('2')}>
          Jogar!
        </Button>
      </Content>
      <CircularButton onClick={() => goPage('3')} />
    </Container>
  );
}

export default Page1;
