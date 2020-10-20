import React, { createRef, useState /* , useEffect */ } from 'react';
import { useHistory } from 'react-router-dom';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import CircularButton from '../../components/CircularButton';
import Button from '../../components/Button';
import InputGame from '../../components/InputLines';
import Modal from '../../components/Modal';
import Title from '../../components/Title';
import TextGreen from '../../components/TextGreen';

// import Video from '../../assets/videos/sigaaslinhas.mp4';

import * as S from './styles';

import ilustra2 from '../../assets/04.png';
import vreper from '../../assets/vreper.png';
import oriepg from '../../assets/oriepg.png';
import rgia from '../../assets/rgia.png';
import mopte from '../../assets/mopte.png';
import palavras from '../../assets/palavras.png';
import Subtitle from '../../components/Subtitle';
import Italic from '../../components/Italic';
import icon from '../../assets/star.svg';

function Pagefour() {
  const history = useHistory();

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

  const RESULT = 'preverperigoagirtempo';
  const [word, setWord] = useState('                     ');

  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);

  const [points, setPoints] = useState(0);
  // useEffect(() => {
  //   setPoints(sessionStorage.getItem('pointsUser'));
  // },[])

  // useEffect(() => {
  //   sessionStorage.setItem('pointsUser', points);
  // }, [points]);

  // const updatePoints = () => {
  //   let curr_points = sessionStorage.getItem('pointsUser')

  //   if(curr_points > 0){
  //     setPoints(curr_points - 20);
  //   }
  // }

  function validate(idx, ref, event) {
    if (event.target.value.length <= 0 || !ref.current) {
      return;
    }
    setWord(
      word.substring(0, idx) + event.target.value + word.substring(idx + 1)
    );
    ref.current.focus();

    // if(RESULT[idx] !== event.target.value.toLowerCase()){
    //   let curr_points = sessionStorage.getItem('pointsUser');

    //   if (curr_points >= 5) {
    //     setPoints(curr_points - 5);
    //   } else {
    //     setPoints(0);
    //     history.push('/');
    //   }
    // }
  }

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <>
      <Container>
        <CircularButton onClick={() => goPage('/5')} direction="back">
          <IoIosArrowBack />
        </CircularButton>
        <Content>
          <Header src={icon}>SIGA AS LINHAS</Header>
          <Subtitle>Direção defensiva evita acidentes</Subtitle>
          <Paragraph>
            O motorista defensivo sabe que não tem domínio sobre as ações de
            outros condutores ou pedestres, nem sobre as condições do tempo e
            das estradas. Assim, sabe da importancia de adotar a prática
            defensiva para garantir sua proteção. Sabe e respeita as leis de
            trânsito, usa sempre o cinto de segurança, conhece e mantém em boas
            condições o seu veículo e não dirige cansado ou sob efeito de álcool
            ou drogas.
          </Paragraph>
          <Italic>
            Leve as linhas aos espaços em branco e descubra qual é o método
            básico da prevenção de acidentes no trânsito.
          </Italic>
          <br />
          <S.Content>
            <div className="vreper">
              <S.Image2>
                <img src={vreper} alt="" />
              </S.Image2>
              <div className="vreper-list">
                <li>
                  <InputGame
                    success={
                      word[0] === ' ' || word[0] === ''
                        ? null
                        : RESULT[0] === word[0].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(0, input2Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input2Ref}
                    success={
                      word[1] === ' ' || word[1] === ''
                        ? null
                        : RESULT[1] === word[1].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(1, input3Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input3Ref}
                    success={
                      word[2] === ' ' || word[2] === ''
                        ? null
                        : RESULT[2] === word[2].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(2, input4Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input4Ref}
                    success={
                      word[3] === ' ' || word[3] === ''
                        ? null
                        : RESULT[3] === word[3].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(3, input5Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input5Ref}
                    success={
                      word[4] === ' ' || word[4] === ''
                        ? null
                        : RESULT[4] === word[4].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(4, input6Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input6Ref}
                    success={
                      word[5] === ' ' || word[5] === ''
                        ? null
                        : RESULT[5] === word[5].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(5, input7Ref, event);
                    }}
                  />
                </li>
              </div>
            </div>
            <p>O</p>
            <div className="vreper">
              <S.Image2>
                <img src={oriepg} alt="" />
              </S.Image2>
              <div className="vreper-list">
                <li>
                  <InputGame
                    ref={input7Ref}
                    success={
                      word[6] === ' ' || word[6] === ''
                        ? null
                        : RESULT[6] === word[6].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(6, input8Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input8Ref}
                    success={
                      word[7] === ' ' || word[7] === ''
                        ? null
                        : RESULT[7] === word[7].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(7, input9Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input9Ref}
                    success={
                      word[8] === ' ' || word[8] === ''
                        ? null
                        : RESULT[8] === word[8].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(8, input10Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input10Ref}
                    success={
                      word[9] === ' ' || word[9] === ''
                        ? null
                        : RESULT[9] === word[9].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(9, input11Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input11Ref}
                    success={
                      word[10] === ' ' || word[10] === ''
                        ? null
                        : RESULT[10] === word[10].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(10, input12Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input12Ref}
                    success={
                      word[11] === ' ' || word[11] === ''
                        ? null
                        : RESULT[11] === word[11].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(11, input13Ref, event);
                    }}
                  />
                </li>
              </div>
            </div>
            <div className="rgia">
              <S.Image2>
                <img src={rgia} alt="" />
              </S.Image2>
              <div className="vreper-list">
                <li>
                  <InputGame
                    ref={input13Ref}
                    success={
                      word[12] === ' ' || word[12] === ''
                        ? null
                        : RESULT[12] === word[12].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(12, input14Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input14Ref}
                    success={
                      word[13] === ' ' || word[13] === ''
                        ? null
                        : RESULT[13] === word[13].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(13, input15Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input15Ref}
                    success={
                      word[14] === ' ' || word[14] === ''
                        ? null
                        : RESULT[14] === word[14].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(14, input16Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input16Ref}
                    success={
                      word[15] === ' ' || word[15] === ''
                        ? null
                        : RESULT[15] === word[15].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(15, input17Ref, event);
                    }}
                  />
                </li>
              </div>
            </div>
            <p>A</p>
            <div className="vreper">
              <S.Image2>
                <img src={mopte} alt="" />
              </S.Image2>
              <div className="vreper-list">
                <li>
                  <InputGame
                    ref={input17Ref}
                    success={
                      word[16] === ' ' || word[16] === ''
                        ? null
                        : RESULT[16] === word[16].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(16, input18Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input18Ref}
                    success={
                      word[17] === ' ' || word[17] === ''
                        ? null
                        : RESULT[17] === word[17].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(17, input19Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input19Ref}
                    success={
                      word[18] === ' ' || word[18] === ''
                        ? null
                        : RESULT[18] === word[18].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(18, input20Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input20Ref}
                    success={
                      word[19] === ' ' || word[19] === ''
                        ? null
                        : RESULT[19] === word[19].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(19, input21Ref, event);
                    }}
                  />
                </li>
                <li>
                  <InputGame
                    ref={input21Ref}
                    success={
                      word[20] === ' ' || word[20] === ''
                        ? null
                        : RESULT[20] === word[20].toLowerCase()
                    }
                    onChange={(event) => {
                      validate(20, input21Ref, event);
                    }}
                  />
                </li>
              </div>
            </div>
          </S.Content>
          {/* <Button onClick={() => setActive(!active)}>Como Jogar?</Button> */}
        </Content>
        {/* {active === true && (
          <Modal open={active} setOpen={() => setActive(!active)} src={Video} />
        )} */}
        <CircularButton onClick={() => goPage('/7')}>
          <IoIosArrowForward />
        </CircularButton>
      </Container>
    </>
  );
}

export default Pagefour;
