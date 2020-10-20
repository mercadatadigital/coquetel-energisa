import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import CircularButton from '../../components/CircularButton';
import Subtitle from '../../components/Subtitle';
import TextBlue from '../../components/TextBlue';
import Italic from '../../components/Italic';
import Button from '../../components/Button';
import icon from '../../assets/star.svg';

function Page5() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/4')} direction="back" />
      <Content>
        <Header src={icon}>EMBARALHADAS</Header>
        <S.Container>
          <Subtitle>Cultura de Segurança</Subtitle>
          <Subtitle>do Trabalho</Subtitle>
          <Paragraph>
            O Brasil ocupa o quarto lugar em acidentes do trabalho. São quedas,
            choques elétricos, lesões, queimaduras e amputações relacionadas a
            objetos, equipamentos e máquinas comuns nas empresas que poderiam
            ser evitados.
          </Paragraph>
          <Paragraph>
            Os hábitos – sejam eles bons ou ruins – definem a vida, e o cuidado
            com a segurança no trabalho é primordial por muitos motivos. A
            segurança do trabalho é responsável por preservar a vida dos
            funcionários proporcionando bem-estar e confiança de que estão em
            uma empresa que se importa com a vida e a segurança de cada um.
          </Paragraph>
          <Paragraph>
            Para a Energisa Segurança é mais do que um dos principais valores, é
            um estilo de vida. Acreditamos na relevância do tema para a saúde e
            a vida de todos os colaboradores. Estamos constantemente investindo
            em treinamentos, capacitações, palestras e cursos de EAD. Estas são
            algumas formas de abordarmos as mensagens, além das ações diárias e
            conversas em DDS constantes.
          </Paragraph>
          <Italic>
            Desembaralhe as sílabas e saiba o que deve haver entre empregadores
            e empregados para se estabelecer uma cultura de segurança do
            trabalho em uma empresa.
          </Italic>
          <Button last onClick={() => goPage('embaralhadas1')}>
            Jogar!
          </Button>
        </S.Container>
      </Content>
      <CircularButton onClick={() => goPage('6')} />
    </Container>
  );
}

export default Page5;
