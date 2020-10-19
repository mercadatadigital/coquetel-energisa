import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { FaUmbrella, FaPlane } from 'react-icons/fa';
import {
  GiSwirledShell,
  GiTargeted,
  GiSpades,
  GiScissors,
} from 'react-icons/gi';
import { AiOutlineScissor, AiFillStar, AiFillHeart } from 'react-icons/ai';
import { FcCellPhone } from 'react-icons/fc';
import { GoMail } from 'react-icons/go';
import { BiHeart, BiPencil, BiStar, BiSun } from 'react-icons/bi';
import { ImPencil2 } from 'react-icons/im';
import { BsSquareFill } from 'react-icons/bs';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Italic from '../../components/Italic';
import InputGame from '../../components/InputGame';
import image from '../../assets/page2.png';
import CircularButton from '../../components/CircularButton';

function Page7() {
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
  const input18Ref = useRef();
  const input19Ref = useRef();

  const RESULT = 'longevidadeestresse';
  const [word, setWord] = useState('                   ');

  function validate(idx, ref, event) {
    if (event.target.value.length <= 0 || !ref.current) {
      return;
    }
    setWord(
      word.substring(0, idx) + event.target.value + word.substring(idx + 1)
    );
    ref.current.focus();
  }

  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/1')} direction="back" />
      <Content>
        <Header>CÓDIGO SECRETO</Header>

        <Paragraph>
          Confira as dicas a seguir e desfrute de uma vida saudável:
        </Paragraph>
        <Paragraph>
          <S.Bullet>•</S.Bullet> Reduza a quantidade de sal no preparo das
          refeições e dê prioridade a temperos naturais, como cebola, alho,
          louro, salsinha, cebolinha, pimenta e coentro.
        </Paragraph>
        <Paragraph>
          <S.Bullet>•</S.Bullet> Evite refrigerantes.
        </Paragraph>
        <Paragraph>
          <S.Bullet>•</S.Bullet> Pratique atividades físicas, elas são
          fundamentais para promover condicionamento, aumentar a 1 __________ e
          diminuir o 2 ________.
        </Paragraph>
        <Paragraph>
          <S.Bullet>•</S.Bullet> Procure informação e ajuda para parar de fumar
          ou de consumir álcool em excesso. O cigarro sobrecarrega o aparelho
          pulmonar e o sistema circulatório. Já o álcool é bastante nocivo ao
          fígado e ao pâncreas, que são fundamentais para o nosso metabolismo.
        </Paragraph>
        <Italic>
          Substitua os códigos pelas letras correspondentes, completando o texto
          acima
        </Italic>

        <S.BoxGame>
          <S.InputArea>
            <GiTargeted color="orange" />
            <InputGame value="a" disabled />
          </S.InputArea>
          <S.InputArea>
            <GiSpades color="pink" />
            <InputGame value="d" disabled />
          </S.InputArea>
          <S.InputArea>
            <GiSwirledShell color="green" />
            <InputGame value="e" disabled />
          </S.InputArea>
          <S.InputArea>
            <AiOutlineScissor color="purple" />
            <InputGame value="g" disabled />
          </S.InputArea>
          <S.InputArea>
            <FcCellPhone color="blue" />
            <InputGame value="i" disabled />
          </S.InputArea>
          <S.InputArea>
            <FaPlane color="orange" />
            <InputGame value="l" disabled />
          </S.InputArea>
          <S.InputArea>
            <GoMail color="pink" />
            <InputGame value="n" disabled />
          </S.InputArea>
          <S.InputArea>
            <AiFillStar color="green" />
            <InputGame value="o" disabled />
          </S.InputArea>
          <S.InputArea>
            <BiSun color="blue" />
            <InputGame value="r" disabled />
          </S.InputArea>
          <S.InputArea>
            <AiFillHeart color="red" />
            <InputGame value="s" disabled />
          </S.InputArea>
          <S.InputArea>
            <ImPencil2 color="pink" />
            <InputGame value="t" disabled />
          </S.InputArea>
          <S.InputArea>
            <BsSquareFill color="purple" />
            <InputGame value="v" disabled />
          </S.InputArea>
        </S.BoxGame>

        <S.BoxGame>
          <S.Number>1</S.Number>
          <S.InputArea>
            <FaPlane color="orange" />
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
            <AiFillStar color="green" />
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
            <GoMail color="pink" />
            <InputGame
              ref={input2Ref}
              success={
                word[2] === ' ' || word[2] === ''
                  ? null
                  : RESULT[2] === word[2].toLowerCase()
              }
              onChange={(event) => {
                validate(2, input3Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiScissors color="purple" />
            <InputGame
              ref={input3Ref}
              success={
                word[3] === ' ' || word[3] === ''
                  ? null
                  : RESULT[3] === word[3].toLowerCase()
              }
              onChange={(event) => {
                validate(3, input4Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiSwirledShell color="green" />
            <InputGame
              ref={input4Ref}
              success={
                word[4] === ' ' || word[4] === ''
                  ? null
                  : RESULT[4] === word[4].toLowerCase()
              }
              onChange={(event) => {
                validate(4, input5Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <BsSquareFill color="purple" />
            <InputGame
              ref={input5Ref}
              success={
                word[5] === ' ' || word[5] === ''
                  ? null
                  : RESULT[5] === word[5].toLowerCase()
              }
              onChange={(event) => {
                validate(5, input6Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <FcCellPhone color="blue" />
            <InputGame
              ref={input6Ref}
              success={
                word[6] === ' ' || word[6] === ''
                  ? null
                  : RESULT[6] === word[6].toLowerCase()
              }
              onChange={(event) => {
                validate(6, input7Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiSpades color="pink" />
            <InputGame
              ref={input7Ref}
              success={
                word[7] === ' ' || word[7] === ''
                  ? null
                  : RESULT[7] === word[7].toLowerCase()
              }
              onChange={(event) => {
                validate(7, input8Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiTargeted color="orange" />
            <InputGame
              ref={input8Ref}
              success={
                word[8] === ' ' || word[8] === ''
                  ? null
                  : RESULT[8] === word[8].toLowerCase()
              }
              onChange={(event) => {
                validate(8, input9Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiSpades color="pink" />
            <InputGame
              ref={input9Ref}
              success={
                word[9] === ' ' || word[9] === ''
                  ? null
                  : RESULT[9] === word[9].toLowerCase()
              }
              onChange={(event) => {
                validate(9, input10Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiSwirledShell color="green" />
            <InputGame
              ref={input10Ref}
              success={
                word[10] === ' ' || word[10] === ''
                  ? null
                  : RESULT[10] === word[10].toLowerCase()
              }
              onChange={(event) => {
                validate(10, input11Ref, event);
              }}
            />
          </S.InputArea>
        </S.BoxGame>

        <S.BoxGame>
          <S.Number>1</S.Number>
          <S.InputArea>
            <GiSwirledShell color="green" />
            <InputGame
              ref={input11Ref}
              success={
                word[11] === ' ' || word[11] === ''
                  ? null
                  : RESULT[11] === word[11].toLowerCase()
              }
              onChange={(event) => {
                validate(11, input12Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <AiFillHeart color="red" />
            <InputGame
              ref={input12Ref}
              success={
                word[12] === ' ' || word[12] === ''
                  ? null
                  : RESULT[12] === word[12].toLowerCase()
              }
              onChange={(event) => {
                validate(12, input13Ref, event);
              }}
            />
          </S.InputArea>

          <S.InputArea>
            <ImPencil2 color="pink" />
            <InputGame
              ref={input13Ref}
              success={
                word[13] === ' ' || word[13] === ''
                  ? null
                  : RESULT[13] === word[13].toLowerCase()
              }
              onChange={(event) => {
                validate(13, input14Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <BiSun color="blue" />
            <InputGame
              ref={input14Ref}
              success={
                word[14] === ' ' || word[14] === ''
                  ? null
                  : RESULT[14] === word[14].toLowerCase()
              }
              onChange={(event) => {
                validate(14, input15Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiSwirledShell color="green" />
            <InputGame
              ref={input15Ref}
              success={
                word[15] === ' ' || word[15] === ''
                  ? null
                  : RESULT[15] === word[15].toLowerCase()
              }
              onChange={(event) => {
                validate(15, input16Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <AiFillHeart color="red" />
            <InputGame
              ref={input16Ref}
              success={
                word[16] === ' ' || word[16] === ''
                  ? null
                  : RESULT[16] === word[16].toLowerCase()
              }
              onChange={(event) => {
                validate(16, input17Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <AiFillHeart color="red" />
            <InputGame
              ref={input17Ref}
              success={
                word[17] === ' ' || word[17] === ''
                  ? null
                  : RESULT[17] === word[17].toLowerCase()
              }
              onChange={(event) => {
                validate(17, input18Ref, event);
              }}
            />
          </S.InputArea>
          <S.InputArea>
            <GiSpades color="pink" />
            <InputGame
              ref={input18Ref}
              success={
                word[18] === ' ' || word[18] === ''
                  ? null
                  : RESULT[18] === word[18].toLowerCase()
              }
              onChange={(event) => {
                validate(18, input18Ref, event);
              }}
            />
          </S.InputArea>
        </S.BoxGame>
      </Content>
      <CircularButton onClick={() => goPage('3')} />
    </Container>
  );
}

export default Page7;
