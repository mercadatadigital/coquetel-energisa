import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { FaCube, FaRadiation, FaVectorSquare, FaPlus } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';
import { BiDroplet } from 'react-icons/bi';
import { ImArrowRight, ImCross, ImPencil2 } from 'react-icons/im';
import { BsCircleHalf, BsFillTriangleFill, BsSquareFill } from 'react-icons/bs';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { TiThLargeOutline } from 'react-icons/ti';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Italic from '../../components/Italic';
import InputGame from '../../components/InputGame';
import image from '../../assets/page7.png';
import CircularButton from '../../components/CircularButton';
import Subtitle from '../../components/Subtitle';
import icon from '../../assets/codigosecreto.svg';

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
  const input20Ref = useRef();
  const input21Ref = useRef();
  const input22Ref = useRef();
  const input23Ref = useRef();
  const input24Ref = useRef();
  const input25Ref = useRef();
  const input26Ref = useRef();
  const input27Ref = useRef();
  const input28Ref = useRef();

  const RESULT = 'informaçãoinvestigaçãoanálise';
  const [word, setWord] = useState('                             ');

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
      <CircularButton onClick={() => goPage('/6')} direction="back" />

      <Content>
        <S.Content>
          <Header src={icon}>CÓDIGO SECRETO</Header>
          <Subtitle>Triângulo da Segurança</Subtitle>

          <S.Textimage>
            <Paragraph>
              <img src={image} alt="imagem 1" />
              Bird criou um gráfico que ficou conhecido como a Pirâmide de Bird.
              Em 1969, ele estudou 1 milhão e 750 mil acidentes em 300 empresas
              e produziu um triângulo que mostrava uma relação de 1 acidente com
              morte, 10 acidentes com lesões leves, 30 acidentes sem lesão e 600
              quase acidentes. Assim, para cada morte haveria 10 lesões, 300
              acidentes e quase 600 incidentes. É importante que cada empresa
              faça sua análise de dados e defina suas regras e normas para
              evitar acidentes. A Energisa oferece equipamentos, ambientes
              seguros e trabalha constantemente as questões comportamentais para
              mantermos a prática da segurança no nosso dia a dia.
            </Paragraph>
          </S.Textimage>
          <Italic>
            Substitua os códigos pelas letras correspondentes, completando o
            texto acima
          </Italic>

          <S.Game>
            <S.BoxGame>
              <S.InputArea>
                <BsCircleHalf color="darkblue" />
                <InputGame value="a" disabled />
              </S.InputArea>
              <S.InputArea>
                <RiSendPlane2Fill color="pink" />
                <InputGame value="ç" disabled />
              </S.InputArea>
              <S.InputArea>
                <FaPlus color="purple" />
                <InputGame value="e" disabled />
              </S.InputArea>
              <S.InputArea>
                <ImArrowRight color="lightblue" />
                <InputGame value="f" disabled />
              </S.InputArea>
              <S.InputArea>
                <BsSquareFill color="green" />
                <InputGame value="g" disabled />
              </S.InputArea>
              <S.InputArea>
                <BsFillTriangleFill color="lightblue" />
                <InputGame value="i" disabled />
              </S.InputArea>
              <S.InputArea>
                <FaCube color="orange" />
                <InputGame value="l" disabled />
              </S.InputArea>
              <S.InputArea>
                <GiHouse color="darkblue" />
                <InputGame value="m" disabled />
              </S.InputArea>
              <S.InputArea>
                <FaRadiation color="green" />
                <InputGame value="n" disabled />
              </S.InputArea>
              <S.InputArea>
                <TiThLargeOutline color="pink" />
                <InputGame value="o" disabled />
              </S.InputArea>
              <S.InputArea>
                <FaVectorSquare color="orange" />
                <InputGame value="r" disabled />
              </S.InputArea>
              <S.InputArea>
                <FaPlus color="purple" />
                <InputGame value="s" disabled />
              </S.InputArea>
              <S.InputArea>
                <ImCross color="lightblue" />
                <InputGame value="t" disabled />
              </S.InputArea>
              <S.InputArea>
                <BiDroplet color="orange" />
                <InputGame value="v" disabled />
              </S.InputArea>
            </S.BoxGame>
          </S.Game>

          <S.Game>
            <S.BoxGame>
              <S.InputArea>
                <BsFillTriangleFill color="lightblue" />
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
                <FaRadiation color="green" />
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
                <ImArrowRight color="lightblue" />
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
                <TiThLargeOutline color="pink" />
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
                <FaVectorSquare color="orange" />
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
                <GiHouse color="darkblue" />
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
                <BsCircleHalf color="darkblue" />
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
                <RiSendPlane2Fill color="pink" />
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
                <BsCircleHalf color="darkblue" />
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
                <TiThLargeOutline color="pink" />
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
            </S.BoxGame>

            <S.BoxGame>
              <S.InputArea>
                <ImArrowRight color="lightblue" />
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
              <S.InputArea>
                <FaRadiation color="green" />
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
                <BiDroplet color="orange" />
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
                <ImPencil2 color="orange" />
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
                <FaPlus color="purple" />
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
                <ImCross color="lightblue" />
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
                <BsFillTriangleFill color="lightblue" />
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
                <BsSquareFill color="green" />
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
                <BsCircleHalf color="darkblue" />
                <InputGame
                  ref={input18Ref}
                  success={
                    word[18] === ' ' || word[18] === ''
                      ? null
                      : RESULT[18] === word[18].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(18, input19Ref, event);
                  }}
                />
              </S.InputArea>
              <S.InputArea>
                <RiSendPlane2Fill color="pink" />
                <InputGame
                  ref={input19Ref}
                  success={
                    word[19] === ' ' || word[19] === ''
                      ? null
                      : RESULT[19] === word[19].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(19, input20Ref, event);
                  }}
                />
              </S.InputArea>
              <S.InputArea>
                <BsCircleHalf color="darkblue" />
                <InputGame
                  ref={input20Ref}
                  success={
                    word[20] === ' ' || word[20] === ''
                      ? null
                      : RESULT[20] === word[20].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(20, input21Ref, event);
                  }}
                />
              </S.InputArea>
              <S.InputArea>
                <TiThLargeOutline color="pink" />
                <InputGame
                  ref={input21Ref}
                  success={
                    word[21] === ' ' || word[21] === ''
                      ? null
                      : RESULT[21] === word[21].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(21, input22Ref, event);
                  }}
                />
              </S.InputArea>
            </S.BoxGame>
            <S.BoxGame>
              <S.InputArea>
                <BsCircleHalf color="darkblue" />
                <InputGame
                  ref={input22Ref}
                  success={
                    word[22] === ' ' || word[22] === ''
                      ? null
                      : RESULT[22] === word[22].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(22, input23Ref, event);
                  }}
                />
              </S.InputArea>{' '}
              <S.InputArea>
                <FaRadiation color="green" />
                <InputGame
                  ref={input23Ref}
                  success={
                    word[23] === ' ' || word[23] === ''
                      ? null
                      : RESULT[23] === word[23].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(23, input24Ref, event);
                  }}
                />
              </S.InputArea>{' '}
              <S.InputArea>
                <BsCircleHalf color="darkblue" />
                <InputGame
                  ref={input24Ref}
                  success={
                    word[24] === ' ' || word[24] === ''
                      ? null
                      : RESULT[24] === word[24].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(24, input25Ref, event);
                  }}
                />
              </S.InputArea>{' '}
              <S.InputArea>
                <FaVectorSquare color="orange" />
                <InputGame
                  ref={input25Ref}
                  success={
                    word[25] === ' ' || word[25] === ''
                      ? null
                      : RESULT[25] === word[25].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(25, input26Ref, event);
                  }}
                />
              </S.InputArea>{' '}
              <S.InputArea>
                <BsFillTriangleFill color="lightblue" />
                <InputGame
                  ref={input26Ref}
                  success={
                    word[26] === ' ' || word[26] === ''
                      ? null
                      : RESULT[26] === word[26].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(26, input27Ref, event);
                  }}
                />
              </S.InputArea>{' '}
              <S.InputArea>
                <FaPlus color="purple" />
                <InputGame
                  ref={input27Ref}
                  success={
                    word[27] === ' ' || word[27] === ''
                      ? null
                      : RESULT[27] === word[27].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(27, input28Ref, event);
                  }}
                />
              </S.InputArea>{' '}
              <S.InputArea>
                <ImPencil2 color="orange" />
                <InputGame
                  ref={input28Ref}
                  success={
                    word[28] === ' ' || word[28] === ''
                      ? null
                      : RESULT[28] === word[28].toLowerCase()
                  }
                  onChange={(event) => {
                    validate(28, input28Ref, event);
                  }}
                />
              </S.InputArea>
            </S.BoxGame>
          </S.Game>
        </S.Content>
      </Content>

      <CircularButton onClick={() => goPage('8')} />
    </Container>
  );
}

export default Page7;
