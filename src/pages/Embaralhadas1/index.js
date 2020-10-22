import React, { useRef, useState, useEffect } from 'react';
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
              background="#eff7fd"
              border="#009bdb"
              win={
                input8Ref.current ? input8Ref.current.value === 'trans' : false
              }
            >
              <FaCheck color="#009045" />
              <input
                ref={input8Ref}
                maxLength={5}
                onChange={(event) => validate(input1Ref, event, 'trans')}
              />
            </S.Input>
            <S.Input
              background="#f8eff6"
              border="#ba007c"
              win={input1Ref.current ? input1Ref.current.value === 'pa' : false}
            >
              <FaCheck color="#009045" />
              <input
                ref={input1Ref}
                maxLength={2}
                onChange={(event) => validate(input2Ref, event, 'pa')}
              />
            </S.Input>
            <S.Input
              background="#fdf8ec"
              border="#e9bb00"
              win={
                input2Ref.current ? input2Ref.current.value === 'rên' : false
              }
            >
              <FaCheck color="#009045" />
              <input
                ref={input2Ref}
                maxLength={3}
                onChange={(event) => validate(input3Ref, event, 'rên')}
              />{' '}
            </S.Input>

            <S.Input
              background="#f0ebf5"
              border="#6d0f7d"
              win={
                input3Ref.current ? input3Ref.current.value === 'cia' : false
              }
            >
              <FaCheck color="#009045" />
              <input
                ref={input3Ref}
                maxLength={3}
                onChange={(event) => validate(input4Ref, event, 'cia')}
              />{' '}
            </S.Input>
            <p>E</p>
            <S.Input
              background="#eff5ed"
              border="#009045"
              maxLength={3}
              win={
                input4Ref.current ? input4Ref.current.value === 'con' : false
              }
            >
              <FaCheck color="#009045" />
              <input
                ref={input4Ref}
                maxLength={3}
                onChange={(event) => validate(input5Ref, event, 'con')}
                disabled={
                  input4Ref.current ? input4Ref.current.value === 'con' : false
                }
              />{' '}
            </S.Input>
            <S.Input
              background="#faf2e9"
              border="#d07401"
              win={input5Ref.current ? input5Ref.current.value === 'fi' : false}
            >
              <FaCheck color="#009045" />
              <input
                ref={input5Ref}
                maxLength={2}
                onChange={(event) => validate(input6Ref, event, 'fi')}
                disabled={
                  input5Ref.current ? input5Ref.current.value === 'fi' : false
                }
              />{' '}
            </S.Input>
            <S.Input
              background="#f8ede7"
              border="#bf0811"
              maxLength={2}
              win={input6Ref.current ? input6Ref.current.value === 'an' : false}
            >
              <FaCheck color="#009045" />
              <input
                ref={input6Ref}
                maxLength={2}
                onChange={(event) => validate(input7Ref, event, 'an')}
                disabled={
                  input6Ref.current ? input6Ref.current.value === 'an' : false
                }
              />{' '}
            </S.Input>
            <S.Input
              background="#e9e8f4"
              border="#001d7e"
              win={input7Ref.current ? input7Ref.current.value === 'ça' : false}
            >
              <FaCheck color="#009045" />
              <input
                ref={input7Ref}
                maxLength={2}
                onChange={(event) => validate(input8Ref, event, 'ça')}
                disabled={
                  input7Ref.current ? input7Ref.current.value === 'ça' : false
                }
              />
            </S.Input>
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
