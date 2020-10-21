import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa';
import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';

import image from '../../assets/embaralhadas.png';
import icon from '../../assets/star.svg';

function Embaralhadas1() {
  const history = useHistory();

  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();
  const input7Ref = useRef();
  const input8Ref = useRef();

  const RESULT = 'transparênciaconfiança';
  const [word, setWord] = useState('');
  const [disable, setDisable] = useState(true);

  function validate(ref, event, check) {
    if (event.target.value === check) {
      setWord(word + event.target.value);
      console.log(word);
      ref.current.focus();
    }
  }

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <Content>
        <Header src={icon}>EMBARALHADAS</Header>
        <S.Container>
          {/* <Italic>
            Desembaralhe as sílabas e saiba o que deve haver entre empregadores
            e empregados para se estabelecer uma cultura de segurança do
            trabalho em uma empresa.
          </Italic> */}
          <S.Content>
            <img src={image} alt="embaralhadas" />
          </S.Content>
          <S.Inputs>
            <S.Input
              ref={input8Ref}
              background="#eff7fd"
              border="#009bdb"
              maxLength={5}
              onChange={(event) => validate(input1Ref, event, 'trans')}
            />
            <S.Input
              ref={input1Ref}
              background="#f8eff6"
              border="#ba007c"
              maxLength={2}
              onChange={(event) => validate(input2Ref, event, 'pa')}
            />
            <S.Input
              ref={input2Ref}
              background="#fdf8ec"
              border="#e9bb00"
              maxLength={3}
              onChange={(event) => validate(input3Ref, event, 'rên')}
            />
            <S.Input
              ref={input3Ref}
              background="#f0ebf5"
              border="#6d0f7d"
              maxLength={3}
              onChange={(event) => validate(input4Ref, event, 'cia')}
            />
            <p>E</p>
            <S.Input
              ref={input4Ref}
              background="#eff5ed"
              border="#009045"
              maxLength={3}
              onChange={(event) => validate(input5Ref, event, 'con')}
            />
            <S.Input
              ref={input5Ref}
              background="#faf2e9"
              border="#d07401"
              maxLength={2}
              onChange={(event) => validate(input6Ref, event, 'fi')}
            />
            <S.Input
              ref={input6Ref}
              background="#f8ede7"
              border="#bf0811"
              maxLength={2}
              onChange={(event) => validate(input7Ref, event, 'an')}
            />
            <S.Input
              ref={input7Ref}
              background="#e9e8f4"
              border="#001d7e"
              maxLength={2}
              onChange={(event) => validate(input7Ref, event, 'ça')}
            />
            {word === RESULT ? (
              <FaCheck className="checkmarck" color="#0097c1" />
            ) : (
              <></>
            )}
          </S.Inputs>
          <Button last onClick={() => goPage('5')}>
            Voltar
          </Button>
        </S.Container>
      </Content>
    </Container>
  );
}

export default Embaralhadas1;
