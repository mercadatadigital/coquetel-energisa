import React, { useState, createRef } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';
import TextThrough from '../../components/TextThrough';
import Input from '../../components/DominoxInput';
import Paragraph from '../../components/Paragraph';
import Content from '../../components/Content';

function Dominox1() {
  const history = useHistory();

  const input1Ref = createRef();
  const input2Ref = createRef();
  const input3Ref = createRef();
  const input4Ref = createRef();
  const input5Ref = createRef();
  const input6Ref = createRef();
  const input7Ref = createRef();
  const input8Ref = createRef();
  const input9Ref = createRef();
  const input10Ref = createRef();
  const input11Ref = createRef();
  const input21Ref = createRef();
  const input22Ref = createRef();
  const input23Ref = createRef();
  const input24Ref = createRef();
  const input25Ref = createRef();
  const input26Ref = createRef();
  const input27Ref = createRef();
  const input28Ref = createRef();
  const input29Ref = createRef();
  const input30Ref = createRef();
  const input31Ref = createRef();
  const input32Ref = createRef();
  const input33Ref = createRef();
  const input34Ref = createRef();
  const input35Ref = createRef();
  const input36Ref = createRef();
  const input37Ref = createRef();
  const input38Ref = createRef();
  const input39Ref = createRef();
  const input40Ref = createRef();
  const input41Ref = createRef();
  const input42Ref = createRef();
  const input43Ref = createRef();
  const input44Ref = createRef();
  const input45Ref = createRef();
  const input46Ref = createRef();
  const input47Ref = createRef();
  const input48Ref = createRef();
  const input49Ref = createRef();
  const input50Ref = createRef();
  const input51Ref = createRef();
  const input52Ref = createRef();
  const input53Ref = createRef();
  const input54Ref = createRef();
  const input55Ref = createRef();
  const input56Ref = createRef();
  const input57Ref = createRef();
  const input58Ref = createRef();
  const input59Ref = createRef();
  const input60Ref = createRef();
  const input61Ref = createRef();
  const input62Ref = createRef();
  const input63Ref = createRef();
  const input64Ref = createRef();
  const input65Ref = createRef();
  const input66Ref = createRef();
  const input67Ref = createRef();
  const input68Ref = createRef();
  const input69Ref = createRef();
  const input70Ref = createRef();
  const input71Ref = createRef();
  const input72Ref = createRef();
  const input73Ref = createRef();
  const input74Ref = createRef();
  const input75Ref = createRef();
  const input76Ref = createRef();
  const input77Ref = createRef();
  const input78Ref = createRef();
  const input79Ref = createRef();
  const input80Ref = createRef();
  const input81Ref = createRef();
  const input82Ref = createRef();
  const input83Ref = createRef();
  const input84Ref = createRef();
  const input85Ref = createRef();
  const input86Ref = createRef();
  const input87Ref = createRef();
  const input88Ref = createRef();
  const input89Ref = createRef();

  const RESULTH1 = 'colete';
  const [word1, setWord1] = useState('colete');

  const RESULTH2 = 'sapato';
  const [word2, setWord2] = useState('     o');

  const RESULTH3 = 'hidrante';
  const [word3, setWord3] = useState('          ');

  const RESULTH4 = 'navegantes';
  const [word4, setWord4] = useState('          ');

  const RESULTH5 = 'agradaveis';
  const [word5, setWord5] = useState('          ');

  const RESULTV1 = 'mundo';
  const [word6, setWord6] = useState('m n  ');

  const RESULTV2 = 'portugueses';
  const [word7, setWord7] = useState('        s s');

  const RESULTV3 = 'esperança';
  const [word8, setWord8] = useState('e        ');

  const RESULTV4 = 'tormentas';
  const [word9, setWord9] = useState('t        ');

  const RESULTV5 = 'india';
  const [word10, setWord10] = useState('i  i ');

  const RESULTV6 = 'continente';
  const [word11, setWord11] = useState(' o   n n e');

  function validate(idx, ref, event, setWord, word) {
    if (event.target.value.length <= 0 || !ref.current) {
      return;
    }

    setWord(
      word.substring(0, idx) + event.target.value + word.substring(idx + 1)
    );

    ref.current.focus();
  }

  const goPage = (page) => {
    history.push(`/${page}`);
  };

  return (
    <Container>
      <Content>
        <S.Container>
          <S.Content>
            <Title>dominox</Title>
            <S.Words>
              <Paragraph>
                Palavras:{' '}
                <span>
                  <TextThrough>colete</TextThrough>,{' '}
                  {word3 === RESULTH3 && word11[5] === 'n' ? (
                    <TextThrough>lembranças</TextThrough>
                  ) : (
                    'lembranças'
                  )}
                  ,{' '}
                  {word5 === RESULTH5 && word11[9] === 'e' ? (
                    <TextThrough>agradáveis</TextThrough>
                  ) : (
                    'agradáveis'
                  )}
                  ,{' '}
                  {word6 === 'mundo' ? (
                    <TextThrough>mundo</TextThrough>
                  ) : (
                    'mundo'
                  )}
                  ,{' '}
                  {word2 === RESULTH2 && word10[3] === 'i' ? (
                    <TextThrough>feitos</TextThrough>
                  ) : (
                    'feitos'
                  )}
                  ,{' '}
                  {word7 === RESULTV2 &&
                  word4[9] === 's' &&
                  word3[9] === 's' ? (
                    <TextThrough>portugueses</TextThrough>
                  ) : (
                    'portugueses'
                  )}
                  ,{' '}
                  {word1 === RESULTH1 && word6[0] === 'm' ? (
                    <TextThrough>extremo</TextThrough>
                  ) : (
                    'extremo'
                  )}
                  ,{' '}
                  {word11 === RESULTV6 && word2[4] === 'o' ? (
                    <TextThrough>continente</TextThrough>
                  ) : (
                    'continente'
                  )}
                  ,{' '}
                  {word9 === RESULTV4 ? (
                    <TextThrough>tormentas</TextThrough>
                  ) : (
                    'tormentas'
                  )}
                  ,{' '}
                  {word4 === RESULTH4 && word11[7] === 'n' ? (
                    <TextThrough>navegantes</TextThrough>
                  ) : (
                    'navegantes'
                  )}
                  ,{' '}
                  {word8 === RESULTV3 ? (
                    <TextThrough>esperança</TextThrough>
                  ) : (
                    'esperança'
                  )}
                  ,{' '}
                  {word10 === RESULTV5 ? (
                    <TextThrough>índia</TextThrough>
                  ) : (
                    'índia'
                  )}
                  ,
                </span>
              </Paragraph>
            </S.Words>
            <S.Game>
              {/* linha1  */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input1Ref}
                  onChange={(event) => {
                    validate(0, input2Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[0] === '' || word2[0] === ''
                      ? null
                      : RESULTH2[0] === word2[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input1Ref}
                  onChange={(event) => {
                    validate(0, input2Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[0] === ' ' || word1[0] === ''
                      ? null
                      : RESULTH1[0] === word1[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
              </S.Row>
              {/* linha2  */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input2Ref}
                  onChange={(event) => {
                    validate(1, input3Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[1] === '' || word2[1] === ''
                      ? null
                      : RESULTH2[1] === word2[1].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input3Ref}
                  onChange={(event) => {
                    validate(2, input4Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[2] === ' ' || word1[2] === ''
                      ? null
                      : RESULTH1[2] === word1[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input9Ref}
                  onChange={(event) => {
                    validate(0, input21Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[0] === ' ' || word7[0] === ''
                      ? null
                      : RESULTV2[0] === word7[0].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha3  */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input3Ref}
                  onChange={(event) => {
                    validate(2, input4Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[2] === '' || word2[2] === ''
                      ? null
                      : RESULTH2[2] === word2[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input3Ref}
                  onChange={(event) => {
                    validate(2, input4Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[2] === ' ' || word1[2] === ''
                      ? null
                      : RESULTH1[2] === word1[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input3Ref}
                  onChange={(event) => {
                    validate(2, input4Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[2] === ' ' || word1[2] === ''
                      ? null
                      : RESULTH1[2] === word1[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input6Ref}
                  onChange={(event) => {
                    validate(0, input7Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[0] === ' ' || word3[0] === ''
                      ? null
                      : RESULTV3[0] === word3[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input9Ref}
                  onChange={(event) => {
                    validate(0, input21Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[0] === ' ' || word7[0] === ''
                      ? null
                      : RESULTV2[0] === word7[0].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha4 */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input4Ref}
                  onChange={(event) => {
                    validate(3, input5Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[3] === '' || word2[3] === ''
                      ? null
                      : RESULTH2[3] === word2[3].toLowerCase()
                  }
                />
                <Input
                  ref={input23Ref}
                  onChange={(event) => {
                    validate(1, input28Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[1] === ' ' || word9[1] === ''
                      ? null
                      : RESULTV4[1] === word9[1].toLowerCase()
                  }
                />
                <Input
                  ref={input23Ref}
                  onChange={(event) => {
                    validate(1, input28Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[1] === ' ' || word9[1] === ''
                      ? null
                      : RESULTV4[1] === word9[1].toLowerCase()
                  }
                />
                <Input
                  ref={input23Ref}
                  onChange={(event) => {
                    validate(1, input28Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[1] === ' ' || word9[1] === ''
                      ? null
                      : RESULTV4[1] === word9[1].toLowerCase()
                  }
                />
                <Input
                  ref={input24Ref}
                  onChange={(event) => {
                    validate(3, input29Ref, event, setWord6, word6);
                  }}
                  success={
                    word6[3] === ' ' || word6[3] === ''
                      ? null
                      : RESULTV1[3] === word6[3].toLowerCase()
                  }
                />
                <Input
                  ref={input23Ref}
                  onChange={(event) => {
                    validate(1, input28Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[1] === ' ' || word9[1] === ''
                      ? null
                      : RESULTV4[1] === word9[1].toLowerCase()
                  }
                />
                <Input
                  ref={input23Ref}
                  onChange={(event) => {
                    validate(1, input28Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[1] === ' ' || word9[1] === ''
                      ? null
                      : RESULTV4[1] === word9[1].toLowerCase()
                  }
                />
                <Input
                  ref={input25Ref}
                  onChange={(event) => {
                    validate(1, input30Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[1] === ' ' || word10[1] === ''
                      ? null
                      : RESULTV5[1] === word10[1].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input7Ref}
                  onChange={(event) => {
                    validate(1, input8Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[1] === ' ' || word3[1] === ''
                      ? null
                      : RESULTV3[1] === word3[1].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input26Ref}
                  onChange={(event) => {
                    validate(2, input32Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[2] === ' ' || word7[2] === ''
                      ? null
                      : RESULTV2[2] === word7[2].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha5 */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input5Ref}
                  onChange={(event) => {
                    validate(4, input5Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[4] === '' || word2[4] === ''
                      ? null
                      : RESULTH2[4] === word2[4].toLowerCase()
                  }
                />
                <Input disable />

                <Input
                  ref={input28Ref}
                  onChange={(event) => {
                    validate(2, input34Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[2] === ' ' || word9[2] === ''
                      ? null
                      : RESULTV4[2] === word9[2].toLowerCase()
                  }
                />
                <Input disable />
                <Input
                  ref={input28Ref}
                  onChange={(event) => {
                    validate(2, input34Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[2] === ' ' || word9[2] === ''
                      ? null
                      : RESULTV4[2] === word9[2].toLowerCase()
                  }
                />
                <Input disable />
                <Input disable />
                <Input disable />
                <Input
                  ref={input30Ref}
                  onChange={(event) => {
                    validate(2, input37Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[2] === ' ' || word10[2] === ''
                      ? null
                      : RESULTV5[2] === word10[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input31Ref}
                  onChange={(event) => {
                    validate(0, input45Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[0] === ' ' || word11[0] === ''
                      ? null
                      : RESULTV6[0] === word11[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input32Ref}
                  onChange={(event) => {
                    validate(3, input41Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[3] === ' ' || word7[3] === ''
                      ? null
                      : RESULTV2[3] === word7[3].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha6 */}
              <S.Row>
                <Input complete value="c" />
                <Input complete value="o" />
                <Input complete value="l" />
                <Input complete value="e" />
                <Input complete value="t" />
                <Input complete value="e" />
                <Input disable />
                <Input disable />
                <Input disable />
                <Input
                  ref={input38Ref}
                  onChange={(event) => {
                    validate(3, input39Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[3] === ' ' || word2[3] === ''
                      ? null
                      : RESULTH2[3] === word2[3].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input40Ref}
                  onChange={(event) => {
                    validate(5, input40Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[5] === ' ' || word2[5] === ''
                      ? null
                      : RESULTH2[5] === word2[5].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha7 */}
              <S.Row>
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
                <Input
                  ref={input44Ref}
                  onChange={(event) => {
                    validate(4, input44Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[4] === ' ' || word10[4] === ''
                      ? null
                      : RESULTV5[4] === word10[4].toLowerCase()
                  }
                />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input46Ref}
                  onChange={(event) => {
                    validate(5, input50Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[5] === ' ' || word7[5] === ''
                      ? null
                      : RESULTV2[5] === word7[5].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input46Ref}
                  onChange={(event) => {
                    validate(5, input50Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[5] === ' ' || word7[5] === ''
                      ? null
                      : RESULTV2[5] === word7[5].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha8 */}
              <S.Row>
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(3, input53Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(3, input53Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(3, input53Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
                  }
                />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(3, input53Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
                  }
                />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(3, input53Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
                  }
                />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(3, input53Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
                  }
                />
                <Input
                  ref={input50Ref}
                  onChange={(event) => {
                    validate(6, input54Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[6] === ' ' || word7[6] === ''
                      ? null
                      : RESULTV2[6] === word7[6].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha9 */}
              <S.Row>
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input54Ref}
                  onChange={(event) => {
                    validate(7, input68Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[7] === ' ' || word7[7] === ''
                      ? null
                      : RESULTV2[7] === word7[7].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input54Ref}
                  onChange={(event) => {
                    validate(7, input68Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[7] === ' ' || word7[7] === ''
                      ? null
                      : RESULTV2[7] === word7[7].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input54Ref}
                  onChange={(event) => {
                    validate(7, input68Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[7] === ' ' || word7[7] === ''
                      ? null
                      : RESULTV2[7] === word7[7].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha10 */}
              <S.Row>
                <Input
                  ref={input55Ref}
                  onChange={(event) => {
                    validate(7, input10Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[7] === ' ' || word8[7] === ''
                      ? null
                      : RESULTV3[7] === word8[7].toLowerCase()
                  }
                />
                <Input
                  ref={input55Ref}
                  onChange={(event) => {
                    validate(7, input10Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[7] === ' ' || word8[7] === ''
                      ? null
                      : RESULTV3[7] === word8[7].toLowerCase()
                  }
                />
                <Input
                  ref={input56Ref}
                  onChange={(event) => {
                    validate(7, input11Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[7] === ' ' || word9[7] === ''
                      ? null
                      : RESULTV4[7] === word9[7].toLowerCase()
                  }
                />
                <Input
                  ref={input55Ref}
                  onChange={(event) => {
                    validate(7, input10Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[7] === ' ' || word8[7] === ''
                      ? null
                      : RESULTV3[7] === word8[7].toLowerCase()
                  }
                />
                <Input
                  ref={input57Ref}
                  onChange={(event) => {
                    validate(0, input58Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[0] === ' ' || word3[0] === ''
                      ? null
                      : RESULTH3[0] === word3[0].toLowerCase()
                  }
                />
                <Input
                  ref={input58Ref}
                  onChange={(event) => {
                    validate(1, input59Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[1] === ' ' || word3[1] === ''
                      ? null
                      : RESULTH3[1] === word3[1].toLowerCase()
                  }
                />
                <Input
                  ref={input59Ref}
                  onChange={(event) => {
                    validate(2, input60Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[2] === ' ' || word3[2] === ''
                      ? null
                      : RESULTH3[2] === word3[2].toLowerCase()
                  }
                />
                <Input
                  ref={input60Ref}
                  onChange={(event) => {
                    validate(3, input61Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[3] === ' ' || word3[3] === ''
                      ? null
                      : RESULTH3[3] === word3[3].toLowerCase()
                  }
                />
                <Input
                  ref={input61Ref}
                  onChange={(event) => {
                    validate(4, input62Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[4] === ' ' || word3[4] === ''
                      ? null
                      : RESULTH3[4] === word3[4].toLowerCase()
                  }
                />
                <Input
                  ref={input62Ref}
                  onChange={(event) => {
                    validate(5, input64Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[5] === ' ' || word3[5] === ''
                      ? null
                      : RESULTH3[5] === word3[5].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input64Ref}
                  onChange={(event) => {
                    validate(7, input65Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[7] === ' ' || word3[7] === ''
                      ? null
                      : RESULTH3[7] === word3[7].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input66Ref}
                  onChange={(event) => {
                    validate(9, input66Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[9] === ' ' || word3[9] === ''
                      ? null
                      : RESULTH3[9] === word3[9].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha11 */}
              <S.Row>
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input68Ref}
                  onChange={(event) => {
                    validate(9, input68Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[9] === ' ' || word7[9] === ''
                      ? null
                      : RESULTV2[9] === word7[9].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input68Ref}
                  onChange={(event) => {
                    validate(9, input68Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[9] === ' ' || word7[9] === ''
                      ? null
                      : RESULTV2[9] === word7[9].toLowerCase()
                  }
                />
              </S.Row>
            </S.Game>
            <Button onClick={() => goPage(4)}>Voltar</Button>
          </S.Content>
        </S.Container>
      </Content>
    </Container>
  );
}

export default Dominox1;
