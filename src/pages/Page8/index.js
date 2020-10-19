import React, { useState /* , useEffect */ } from 'react';
import { useHistory } from 'react-router-dom';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import SelectImage from '../../components/SelectImage';
import CircularButton from '../../components/CircularButton';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Title from '../../components/Title';
import TextGreen from '../../components/TextGreen';

// import Video from '../../assets/videos/encaixe.mp4';

import * as S from './styles';

import ilustra1 from '../../assets/page8.png';
import e from '../../assets/e.png';
import r from '../../assets/r.png';
import g from '../../assets/g.png';
import o from '../../assets/o.png';
import n from '../../assets/n.png';
import o2 from '../../assets/o2.png';
import m from '../../assets/m.png';
import i from '../../assets/i.png';
import a from '../../assets/a.png';

import Subtitle from '../../components/Subtitle';
import Italic from '../../components/Italic';

function Pagesix() {
  const [selected, setSelected] = useState();
  const [win, setWin] = useState([]);
  const [active, setActive] = useState(false);
  const [err, setErr] = useState();

  const [modal, setModal] = useState(false);

  const [points, setPoints] = useState(0);

  // useEffect(() => {
  //   setPoints(sessionStorage.getItem('pointsUser'));
  // }, [])

  // useEffect(() => {
  //   sessionStorage.setItem('pointsUser', points);
  // }, [points]);

  // const updatePoints = () => {
  //   let curr_points = sessionStorage.getItem('pointsUser')

  //   if (curr_points > 0) {
  //     setPoints(curr_points - 20);
  //   }
  // }

  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  const select = (id) => {
    if (win.includes(id)) {
      return;
    }

    if (selected === id) {
      setSelected(null);
      return;
    }
    setSelected(id);
  };

  const verify = (id) => {
    if (win.includes(id)) {
      return;
    }

    if (id === selected) {
      setWin((old) => old.concat([selected]));
      setSelected(null);
    } else {
      setErr(id);
      // let curr_points = sessionStorage.getItem('pointsUser');

      // if (curr_points >= 5) {
      //   setPoints(curr_points - 5);
      // } else {
      //   setPoints(0);
      //   history.push('/');
      // }
    }
  };

  return (
    <>
      <Container>
        <CircularButton onClick={() => goPage('/7')} direction="back">
          <IoIosArrowBack />
        </CircularButton>
        <Content>
          <S.Content>
            <Header>ENCAIXE</Header>
            <Subtitle>Home Office </Subtitle>
            <Paragraph>
              A pandemia do novo coronavírus trouxe novas orientações de
              segurança e higienização para o ambiente de trabalho. Para as
              atividades não essenciais, o Home Office foi adotado. Quem
              trabalha em casa deve escolher um ambiente com boa luminosidade,
              arejado e que garanta certo conforto para exercer sua função.
              Mouse e teclado posicionados em linha reta. Plantas dos pés
              apoiadas no chão. Não ficar sentado por tempo prolongado.
              Levantar-se, andar, fazer exercícios de alongamento nos
              intervalos. Ao trabalhar com notebook, prefira o uso de um suporte
              na mesa. Nunca trabalhar no sofá. Ter um cômodo ou um canto de
              trabalho.
            </Paragraph>
            <Italic>
              Encaixe as peças corretamente e descubra qual é a ciência que
              estuda objetos e equipamentos que devem ser utilizados pelo
              trabalhador para evitar problemas de saúde, postura e trazer
              conforto para as pessoas.
            </Italic>

            <S.Image>
              <img src={ilustra1} alt="Salão de cabelereiro" />
            </S.Image>
            <S.Buttons>
              <SelectImage
                src={o2}
                onClick={() => select(5)}
                selected={selected === 5}
                win={win.includes(5)}
              />

              <SelectImage
                src={r}
                onClick={() => select(1)}
                selected={selected === 1}
                win={win.includes(1)}
              />
              <SelectImage
                src={i}
                onClick={() => select(7)}
                selected={selected === 7}
                win={win.includes(7)}
              />
              <SelectImage
                src={g}
                onClick={() => select(2)}
                selected={selected === 2}
                win={win.includes(2)}
              />

              <SelectImage
                src={n}
                onClick={() => select(4)}
                selected={selected === 4}
                win={win.includes(4)}
              />
            </S.Buttons>

            <S.Buttons>
              <SelectImage
                src={m}
                onClick={() => select(6)}
                selected={selected === 6}
                win={win.includes(6)}
              />

              <SelectImage
                src={a}
                onClick={() => select(8)}
                selected={selected === 8}
                win={win.includes(8)}
              />
              <SelectImage
                src={e}
                onClick={() => select(0)}
                selected={selected === 0}
                win={win.includes(0)}
              />

              <SelectImage
                src={o}
                onClick={() => select(3)}
                selected={selected === 3}
                win={win.includes(3)}
              />
            </S.Buttons>

            <S.Retangles>
              <S.SameColor>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(0)}
                  win={win.includes(0)}
                  err={err === 0}
                >
                  <img
                    className="win-image"
                    src={e}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>

                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(1)}
                  win={win.includes(1)}
                  err={err === 1}
                >
                  <img
                    className="win-image"
                    src={r}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>

                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(2)}
                  win={win.includes(2)}
                  err={err === 2}
                >
                  <img
                    className="win-image"
                    src={g}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(3)}
                  win={win.includes(3)}
                  err={err === 3}
                >
                  <img
                    className="win-image"
                    src={o}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(4)}
                  win={win.includes(4)}
                  err={err === 4}
                >
                  <img
                    className="win-image"
                    src={n}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(5)}
                  win={win.includes(5)}
                  err={err === 5}
                >
                  <img
                    className="win-image"
                    src={o2}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(6)}
                  win={win.includes(6)}
                  err={err === 6}
                >
                  <img
                    className="win-image"
                    src={m}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(7)}
                  win={win.includes(7)}
                  err={err === 7}
                >
                  <img
                    className="win-image"
                    src={i}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
                <S.Retangle
                  color="#00a8ec"
                  onClick={() => verify(8)}
                  win={win.includes(8)}
                  err={err === 8}
                >
                  <img
                    className="win-image"
                    src={a}
                    alt="Trecho da palavra Poupança"
                  />
                </S.Retangle>
              </S.SameColor>
            </S.Retangles>

            {/* <Button onClick={() => setActive(!active)}>Como Jogar?</Button> */}
          </S.Content>
        </Content>
        {/* {
          active === true &&
          <Modal open={active} setOpen={() => setActive(!active)} src={Video} />
        } */}
        <CircularButton onClick={() => goPage('/9')}>
          <IoIosArrowForward />
        </CircularButton>
      </Container>
    </>
  );
}

export default Pagesix;
