import React, { useState, useRef } from 'react';

import { FaUmbrella } from 'react-icons/fa';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import InputGame from '../../components/InputGame';

function Page1() {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();
  const input7Ref = useRef();
  const input8Ref = useRef();
  const input9Ref = useRef();
  const input10Ref = useRef();
  const input11Ref = useRef();
  const input12Ref = useRef();
  const input13Ref = useRef();
  const input14Ref = useRef();
  const input15Ref = useRef();
  const input16Ref = useRef();
  const input17Ref = useRef();

  const RESULT = 'longevidade';
  const [word, setWord] = useState('           ');

  function validate(idx, ref, event) {
    if (event.target.value.length <= 0 || !ref.current) {
      return;
    }
    setWord(
      word.substring(0, idx) + event.target.value + word.substring(idx + 1)
    );
    ref.current.focus();
  }

  return (
    <Container>
      <Content>
        <Header>CÓDIGO SECRETO</Header>
        <Paragraph>
          Uma empresa centenária, a Energisa é a quinta maior empresa em
          distribuição de energia do Brasil. Como reconhecemos que o desempenho
          e o trabalho em equipe é o que garante os nossos bons resultados,
          investimos no desenvolvimento dos profissionais que trabalham conosco.
          Somos cerca de 19 mil colaboradores internos e terceirizados. Com
          tanta gente trabalhando conosco, temos o orgulho de ter um programa de
          prevenção de acidentes de trabalho cuidadoso e eficiente. Pensando
          sempre na saúde e bem-estar de todos.
        </Paragraph>
        <Paragraph>
          Você sabia que, tomando algumas medidas básicas podemos ter mais
          qualidade de vida? O Brasil vem enfrentando aumento expressivo dos
          índices de sobrepeso e obesidade. Em média, o excesso de peso acomete
          um a cada dois adultos e uma a cada três crianças.
        </Paragraph>

        <S.BoxGame>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame value="a" disabled />
          </S.InputArea>
        </S.BoxGame>

        <S.BoxGame>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame
              success={
                word[0] === ' ' || word[0] === ''
                  ? null
                  : RESULT[0] === word[0].toLowerCase()
              }
              onChange={(event) => {
                validate(0, input1Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame
              ref={input1Ref}
              success={
                word[1] === ' ' || word[1] === ''
                  ? null
                  : RESULT[1] === word[1].toLowerCase()
              }
              onChange={(event) => {
                validate(1, input2Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame />
          </S.InputArea>
          <S.InputArea>
            <FaUmbrella color="blue" />
            <InputGame />
          </S.InputArea>
        </S.BoxGame>
      </Content>
    </Container>
  );
}

export default Page1;
