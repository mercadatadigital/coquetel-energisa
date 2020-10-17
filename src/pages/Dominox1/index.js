import React, { useState, createRef } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import Header from '../../components/Header';
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
  const input12Ref = createRef();
  const input13Ref = createRef();
  const input14Ref = createRef();
  const input15Ref = createRef();
  const input16Ref = createRef();
  const input17Ref = createRef();
  const input18Ref = createRef();
  const input19Ref = createRef();
  const input20Ref = createRef();
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

  const RESULTH1 = 'abafador';
  const [word1, setWord1] = useState('a a a   ');

  const RESULTH2 = 'luvas';
  const [word2, setWord2] = useState('l    ');

  const RESULTH3 = 'cinto';
  const [word3, setWord3] = useState('c    ');

  const RESULTH4 = 'respirador';
  const [word4, setWord4] = useState('         r');

  const RESULTV1 = 'sapat';
  const [word6, setWord6] = useState('     ');

  const RESULTV2 = 'capacete';
  const [word7, setWord7] = useState('     e  ');

  const RESULTV3 = 'capela';
  const [word8, setWord8] = useState('   e  ');

  const RESULTV4 = 'mascara';
  const [word9, setWord9] = useState('  s    ');

  const RESULTV5 = 'hidrante';
  const [word10, setWord10] = useState('     n  ');

  const RESULTV6 = 'exaustores';
  const [word11, setWord11] = useState('      o   ');

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
            <Header>DOMINOX</Header>
            <S.Words>
              <Paragraph>
                Palavras:{' '}
                <span>
                  <TextThrough>colete</TextThrough>,{' '}
                  {word6 === RESULTV1 ? (
                    <TextThrough>sapato</TextThrough>
                  ) : (
                    'sapato'
                  )}
                  ,{' '}
                  {word7 === RESULTV2 ? (
                    <TextThrough>capacete</TextThrough>
                  ) : (
                    'capacete'
                  )}
                  ,{' '}
                  {word8 === 'capela' ? (
                    <TextThrough>capela</TextThrough>
                  ) : (
                    'capela'
                  )}
                  ,{' '}
                  {word1 === RESULTH1 &&
                  word6[3] === 'a' &&
                  word7[3] === 'a' &&
                  word8[1] === 'a' ? (
                    <TextThrough>abafador</TextThrough>
                  ) : (
                    'abafador'
                  )}
                  ,{' '}
                  {word2 === RESULTH2 && word8[4] === 'l' ? (
                    <TextThrough>luvas</TextThrough>
                  ) : (
                    'luvas'
                  )}
                  ,{' '}
                  {word3 === RESULTH3 && word9[3] === 'c' ? (
                    <TextThrough>cinto</TextThrough>
                  ) : (
                    'cinto'
                  )}
                  ,{' '}
                  {word10 === RESULTV5 && word3[2] === 'n' ? (
                    <TextThrough>hidrante</TextThrough>
                  ) : (
                    'hidrante'
                  )}
                  ,{' '}
                  {word11 === RESULTV6 && word3[4] === 'o' ? (
                    <TextThrough>exaustores</TextThrough>
                  ) : (
                    'exaustores'
                  )}
                  ,{' '}
                  {word4 === RESULTH4 && word9[5] === 'r' ? (
                    <TextThrough>respirador</TextThrough>
                  ) : (
                    'respirador'
                  )}
                  ,{' '}
                  {word9 === RESULTV4 && word9[3] === 'c' ? (
                    <TextThrough>máscara</TextThrough>
                  ) : (
                    'máscara'
                  )}
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
                    validate(0, input3Ref, event, setWord6, word6);
                  }}
                  success={
                    word6[0] === ' ' || word6[0] === ''
                      ? null
                      : RESULTV1[0] === word6[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input2Ref}
                  onChange={(event) => {
                    validate(0, input4Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[0] === ' ' || word7[0] === ''
                      ? null
                      : RESULTV2[0] === word7[0].toLowerCase()
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
                  ref={input3Ref}
                  onChange={(event) => {
                    validate(1, input6Ref, event, setWord6, word6);
                  }}
                  success={
                    word6[1] === ' ' || word6[1] === ''
                      ? null
                      : RESULTV1[1] === word6[1].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input4Ref}
                  onChange={(event) => {
                    validate(1, input7Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[1] === ' ' || word7[1] === ''
                      ? null
                      : RESULTV2[1] === word7[1].toLowerCase()
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
                  ref={input5Ref}
                  onChange={(event) => {
                    validate(0, input10Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[0] === ' ' || word11[0] === ''
                      ? null
                      : RESULTV6[0] === word11[0].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha3  */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input6Ref}
                  onChange={(event) => {
                    validate(2, input11Ref, event, setWord6, word6);
                  }}
                  success={
                    word6[2] === ' ' || word6[2] === ''
                      ? null
                      : RESULTV1[2] === word6[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input7Ref}
                  onChange={(event) => {
                    validate(2, input13Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[2] === ' ' || word7[2] === ''
                      ? null
                      : RESULTV2[2] === word7[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input8Ref}
                  onChange={(event) => {
                    validate(0, input15Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[0] === ' ' || word8[0] === ''
                      ? null
                      : RESULTV3[0] === word8[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input9Ref}
                  onChange={(event) => {
                    validate(0, input19Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[0] === ' ' || word10[0] === ''
                      ? null
                      : RESULTV5[0] === word10[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input10Ref}
                  onChange={(event) => {
                    validate(1, input20Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[1] === ' ' || word11[1] === ''
                      ? null
                      : RESULTV6[1] === word11[1].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha4 */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input11Ref}
                  onChange={(event) => {
                    validate(3, input21Ref, event, setWord6, word6);
                  }}
                  success={
                    word6[3] === ' ' || word6[3] === ''
                      ? null
                      : RESULTV1[3] === word6[3].toLowerCase()
                  }
                />
                <Input
                  ref={input12Ref}
                  onChange={(event) => {
                    validate(1, input14Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[1] === ' ' || word1[1] === ''
                      ? null
                      : RESULTH1[1] === word1[1].toLowerCase()
                  }
                />
                <Input
                  ref={input13Ref}
                  onChange={(event) => {
                    validate(3, input22Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[3] === ' ' || word7[3] === ''
                      ? null
                      : RESULTV2[3] === word7[3].toLowerCase()
                  }
                />
                <Input
                  ref={input14Ref}
                  onChange={(event) => {
                    validate(3, input16Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[3] === ' ' || word1[3] === ''
                      ? null
                      : RESULTH1[3] === word1[3].toLowerCase()
                  }
                />
                <Input
                  ref={input15Ref}
                  onChange={(event) => {
                    validate(1, input23Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[1] === ' ' || word8[1] === ''
                      ? null
                      : RESULTV3[1] === word8[1].toLowerCase()
                  }
                />
                <Input
                  ref={input16Ref}
                  onChange={(event) => {
                    validate(5, input17Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[5] === ' ' || word1[5] === ''
                      ? null
                      : RESULTH1[5] === word1[5].toLowerCase()
                  }
                />
                <Input
                  ref={input17Ref}
                  onChange={(event) => {
                    validate(6, input18Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[6] === ' ' || word1[6] === ''
                      ? null
                      : RESULTH1[6] === word1[6].toLowerCase()
                  }
                />
                <Input
                  ref={input18Ref}
                  onChange={(event) => {
                    validate(7, input18Ref, event, setWord1, word1);
                  }}
                  success={
                    word1[7] === ' ' || word1[7] === ''
                      ? null
                      : RESULTH1[7] === word1[7].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input19Ref}
                  onChange={(event) => {
                    validate(1, input25Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[1] === ' ' || word10[1] === ''
                      ? null
                      : RESULTV5[1] === word10[1].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input20Ref}
                  onChange={(event) => {
                    validate(2, input26Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[2] === ' ' || word11[2] === ''
                      ? null
                      : RESULTV6[2] === word11[2].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha5 */}
              <S.Row>
                <Input invisible />
                <Input
                  ref={input21Ref}
                  onChange={(event) => {
                    validate(4, input21Ref, event, setWord6, word6);
                  }}
                  success={
                    word6[4] === ' ' || word6[4] === ''
                      ? null
                      : RESULTV1[4] === word6[4].toLowerCase()
                  }
                />
                <Input disable />

                <Input
                  ref={input22Ref}
                  onChange={(event) => {
                    validate(4, input30Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[4] === ' ' || word7[4] === ''
                      ? null
                      : RESULTV2[4] === word7[4].toLowerCase()
                  }
                />
                <Input disable />
                <Input
                  ref={input23Ref}
                  onChange={(event) => {
                    validate(2, input31Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[2] === ' ' || word8[2] === ''
                      ? null
                      : RESULTV3[2] === word8[2].toLowerCase()
                  }
                />
                <Input disable />
                <Input disable />
                <Input disable />
                <Input
                  ref={input24Ref}
                  onChange={(event) => {
                    validate(0, input27Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[0] === ' ' || word9[0] === ''
                      ? null
                      : RESULTV4[0] === word9[0].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input25Ref}
                  onChange={(event) => {
                    validate(2, input28Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[2] === ' ' || word10[2] === ''
                      ? null
                      : RESULTV5[2] === word10[2].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input26Ref}
                  onChange={(event) => {
                    validate(3, input29Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[3] === ' ' || word11[3] === ''
                      ? null
                      : RESULTV6[3] === word11[3].toLowerCase()
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
                  ref={input27Ref}
                  onChange={(event) => {
                    validate(1, input40Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[1] === ' ' || word9[1] === ''
                      ? null
                      : RESULTV4[1] === word9[1].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input28Ref}
                  onChange={(event) => {
                    validate(3, input36Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[3] === ' ' || word10[3] === ''
                      ? null
                      : RESULTV5[3] === word10[3].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input29Ref}
                  onChange={(event) => {
                    validate(4, input37Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[4] === ' ' || word11[4] === ''
                      ? null
                      : RESULTV6[4] === word11[4].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha7 */}
              <S.Row>
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input30Ref}
                  onChange={(event) => {
                    validate(6, input38Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[6] === ' ' || word7[6] === ''
                      ? null
                      : RESULTV2[6] === word7[6].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input31Ref}
                  onChange={(event) => {
                    validate(4, input39Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[4] === ' ' || word8[4] === ''
                      ? null
                      : RESULTV3[4] === word8[4].toLowerCase()
                  }
                />
                <Input
                  ref={input32Ref}
                  onChange={(event) => {
                    validate(1, input33Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[1] === ' ' || word2[1] === ''
                      ? null
                      : RESULTH2[1] === word2[1].toLowerCase()
                  }
                />
                <Input
                  ref={input33Ref}
                  onChange={(event) => {
                    validate(2, input34Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[2] === ' ' || word2[2] === ''
                      ? null
                      : RESULTH2[2] === word2[2].toLowerCase()
                  }
                />
                <Input
                  ref={input34Ref}
                  onChange={(event) => {
                    validate(3, input35Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[3] === ' ' || word2[3] === ''
                      ? null
                      : RESULTH2[3] === word2[3].toLowerCase()
                  }
                />
                <Input
                  ref={input35Ref}
                  onChange={(event) => {
                    validate(4, input35Ref, event, setWord2, word2);
                  }}
                  success={
                    word2[4] === ' ' || word2[4] === ''
                      ? null
                      : RESULTH2[4] === word2[4].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input36Ref}
                  onChange={(event) => {
                    validate(4, input46Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[4] === ' ' || word10[4] === ''
                      ? null
                      : RESULTV5[4] === word10[4].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input37Ref}
                  onChange={(event) => {
                    validate(5, input47Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[5] === ' ' || word11[5] === ''
                      ? null
                      : RESULTV6[5] === word11[5].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha8 */}
              <S.Row>
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input38Ref}
                  onChange={(event) => {
                    validate(7, input38Ref, event, setWord7, word7);
                  }}
                  success={
                    word7[7] === ' ' || word7[7] === ''
                      ? null
                      : RESULTV2[7] === word7[7].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input39Ref}
                  onChange={(event) => {
                    validate(5, input39Ref, event, setWord8, word8);
                  }}
                  success={
                    word8[5] === ' ' || word8[5] === ''
                      ? null
                      : RESULTV3[5] === word8[5].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input40Ref}
                  onChange={(event) => {
                    validate(3, input45Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[3] === ' ' || word9[3] === ''
                      ? null
                      : RESULTV4[3] === word9[3].toLowerCase()
                  }
                />
                <Input
                  ref={input41Ref}
                  onChange={(event) => {
                    validate(1, input42Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[1] === ' ' || word3[1] === ''
                      ? null
                      : RESULTH3[1] === word3[1].toLowerCase()
                  }
                />
                <Input
                  ref={input42Ref}
                  onChange={(event) => {
                    validate(2, input43Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[2] === ' ' || word3[2] === ''
                      ? null
                      : RESULTH3[2] === word3[2].toLowerCase()
                  }
                />
                <Input
                  ref={input43Ref}
                  onChange={(event) => {
                    validate(3, input44Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[3] === ' ' || word3[3] === ''
                      ? null
                      : RESULTH3[3] === word3[3].toLowerCase()
                  }
                />
                <Input
                  ref={input44Ref}
                  onChange={(event) => {
                    validate(4, input44Ref, event, setWord3, word3);
                  }}
                  success={
                    word3[4] === ' ' || word3[4] === ''
                      ? null
                      : RESULTH3[4] === word3[4].toLowerCase()
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
                  ref={input45Ref}
                  onChange={(event) => {
                    validate(4, input57Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[4] === ' ' || word9[4] === ''
                      ? null
                      : RESULTV4[4] === word9[4].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input46Ref}
                  onChange={(event) => {
                    validate(6, input58Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[6] === ' ' || word10[6] === ''
                      ? null
                      : RESULTV5[6] === word10[6].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input47Ref}
                  onChange={(event) => {
                    validate(7, input59Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[7] === ' ' || word11[7] === ''
                      ? null
                      : RESULTV6[7] === word11[7].toLowerCase()
                  }
                />
              </S.Row>
              {/* linha10 */}
              <S.Row>
                <Input
                  ref={input48Ref}
                  onChange={(event) => {
                    validate(0, input49Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[0] === ' ' || word4[0] === ''
                      ? null
                      : RESULTH4[0] === word4[0].toLowerCase()
                  }
                />
                <Input
                  ref={input49Ref}
                  onChange={(event) => {
                    validate(1, input50Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[1] === ' ' || word4[1] === ''
                      ? null
                      : RESULTH4[1] === word4[1].toLowerCase()
                  }
                />
                <Input
                  ref={input50Ref}
                  onChange={(event) => {
                    validate(2, input51Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[2] === ' ' || word4[2] === ''
                      ? null
                      : RESULTH4[2] === word4[2].toLowerCase()
                  }
                />
                <Input
                  ref={input51Ref}
                  onChange={(event) => {
                    validate(3, input52Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[3] === ' ' || word4[3] === ''
                      ? null
                      : RESULTH4[3] === word4[3].toLowerCase()
                  }
                />
                <Input
                  ref={input52Ref}
                  onChange={(event) => {
                    validate(4, input53Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[4] === ' ' || word4[4] === ''
                      ? null
                      : RESULTH4[4] === word4[4].toLowerCase()
                  }
                />
                <Input
                  ref={input53Ref}
                  onChange={(event) => {
                    validate(5, input54Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[5] === ' ' || word4[5] === ''
                      ? null
                      : RESULTH4[5] === word4[5].toLowerCase()
                  }
                />
                <Input
                  ref={input54Ref}
                  onChange={(event) => {
                    validate(6, input55Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[6] === ' ' || word4[6] === ''
                      ? null
                      : RESULTH4[6] === word4[6].toLowerCase()
                  }
                />
                <Input
                  ref={input55Ref}
                  onChange={(event) => {
                    validate(7, input56Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[7] === ' ' || word4[7] === ''
                      ? null
                      : RESULTH4[7] === word4[7].toLowerCase()
                  }
                />
                <Input
                  ref={input56Ref}
                  onChange={(event) => {
                    validate(8, input57Ref, event, setWord4, word4);
                  }}
                  success={
                    word4[8] === ' ' || word4[8] === ''
                      ? null
                      : RESULTH4[8] === word4[8].toLowerCase()
                  }
                />
                <Input
                  ref={input57Ref}
                  onChange={(event) => {
                    validate(5, input60Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[5] === ' ' || word9[5] === ''
                      ? null
                      : RESULTV4[5] === word9[5].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input58Ref}
                  onChange={(event) => {
                    validate(7, input58Ref, event, setWord10, word10);
                  }}
                  success={
                    word10[7] === ' ' || word10[7] === ''
                      ? null
                      : RESULTV5[7] === word10[7].toLowerCase()
                  }
                />
                <Input invisible />
                <Input
                  ref={input59Ref}
                  onChange={(event) => {
                    validate(8, input61Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[8] === ' ' || word11[8] === ''
                      ? null
                      : RESULTV6[8] === word11[8].toLowerCase()
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
                  ref={input60Ref}
                  onChange={(event) => {
                    validate(6, input60Ref, event, setWord9, word9);
                  }}
                  success={
                    word9[6] === ' ' || word9[6] === ''
                      ? null
                      : RESULTV4[6] === word9[6].toLowerCase()
                  }
                />
                <Input invisible />
                <Input invisible />
                <Input invisible />
                <Input
                  ref={input61Ref}
                  onChange={(event) => {
                    validate(9, input61Ref, event, setWord11, word11);
                  }}
                  success={
                    word11[9] === ' ' || word11[9] === ''
                      ? null
                      : RESULTV6[9] === word11[9].toLowerCase()
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
