import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
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

  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');
  const [word5, setWord5] = useState('');
  const [word6, setWord6] = useState('');
  const [word7, setWord7] = useState('');
  const [word8, setWord8] = useState('');

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

  function handleFocus(event) {
    event.target.select();
  }

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
              win={word1 === 'trans'}
              wrong={word1 !== 'trans' && word1.length === 5}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>
              <input
                onFocus={handleFocus}
                ref={input8Ref}
                maxLength={5}
                onChange={(event) => {
                  validate(input1Ref, event, 'trans');
                  setWord1(event.target.value);
                }}
              />
            </S.Input>
            <S.Input
              background="#f8eff6"
              border="#ba007c"
              win={word2 === 'pa'}
              wrong={word2 !== 'pa' && word2.length === 2}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>
              <input
                onFocus={handleFocus}
                ref={input1Ref}
                maxLength={2}
                onChange={(event) => {
                  validate(input2Ref, event, 'pa');
                  setWord2(event.target.value);
                }}
              />
            </S.Input>
            <S.Input
              background="#fdf8ec"
              border="#e9bb00"
              win={word3 === 'rên'}
              wrong={word3 !== 'rên' && word3.length === 3}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>
              <input
                onFocus={handleFocus}
                ref={input2Ref}
                maxLength={3}
                onChange={(event) => {
                  validate(input3Ref, event, 'rên');
                  setWord3(event.target.value);
                }}
              />{' '}
            </S.Input>

            <S.Input
              background="#f0ebf5"
              border="#6d0f7d"
              win={word4 === 'cia'}
              wrong={word4 !== 'cia' && word4.length === 3}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>
              <input
                onFocus={handleFocus}
                ref={input3Ref}
                maxLength={3}
                onChange={(event) => {
                  validate(input4Ref, event, 'cia');
                  setWord4(event.target.value);
                }}
              />{' '}
            </S.Input>
            <p>E</p>
            <S.Input
              background="#eff5ed"
              border="#009045"
              maxLength={3}
              win={word5 === 'con'}
              wrong={word5 !== 'con' && word5.length === 3}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>
              <input
                onFocus={handleFocus}
                ref={input4Ref}
                maxLength={3}
                onChange={(event) => {
                  validate(input5Ref, event, 'con');
                  setWord5(event.target.value);
                }}
              />{' '}
            </S.Input>
            <S.Input
              background="#faf2e9"
              border="#d07401"
              win={word6 === 'fi'}
              wrong={word6 !== 'fi' && word6.length === 2}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>{' '}
              <input
                onFocus={handleFocus}
                ref={input5Ref}
                maxLength={2}
                onChange={(event) => {
                  validate(input6Ref, event, 'fi');
                  setWord6(event.target.value);
                }}
              />{' '}
            </S.Input>
            <S.Input
              background="#f8ede7"
              border="#bf0811"
              maxLength={2}
              win={word7 === 'an'}
              wrong={word7 !== 'an' && word7.length === 2}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>{' '}
              <input
                onFocus={handleFocus}
                ref={input6Ref}
                maxLength={2}
                onChange={(event) => {
                  validate(input7Ref, event, 'an');
                  setWord7(event.target.value);
                }}
              />{' '}
            </S.Input>
            <S.Input
              background="#e9e8f4"
              border="#001d7e"
              win={word8 === 'ça'}
              wrong={word8 !== 'ça' && word8.length === 2}
            >
              <div className="validation">
                <FaCheck className="win" color="#009045" />
                <RiCloseLine className="wrong" color="red" />
              </div>{' '}
              <input
                onFocus={handleFocus}
                ref={input7Ref}
                maxLength={2}
                onChange={(event) => {
                  validate(input8Ref, event, 'ça');
                  setWord8(event.target.value);
                }}
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
