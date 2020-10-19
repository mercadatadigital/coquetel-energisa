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

function Page9() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/8')} direction="back" />
      <Content>
        <Header>CAÇA-PALAVRAS</Header>
        <S.Container>
          <Subtitle>Falando sobre DST</Subtitle>

          <Paragraph>
            Em geral, os <TextBlue>SINTOMAS</TextBlue> mais comuns são{' '}
            <TextBlue>VERMELHIDÃO</TextBlue>, feridas,
            <TextBlue> CORRIMENTOS</TextBlue> (com cheiro forte ou não),{' '}
            <TextBlue>VERRUGAS</TextBlue>, <TextBlue>COCEIRA</TextBlue> nas
            partes íntimas e dor durante a relação sexual. Porém, algumas DSTs
            são assintomáticas, ou seja, não apresentam sintomas. Logo, é muito
            importante fazer <TextBlue>EXAMES</TextBlue> de{' '}
            <TextBlue>SANGUE</TextBlue> periodicamente, pois será através deles
            que as doenças serão <TextBlue>DIAGNOSTICADAS</TextBlue>. Caso
            perceba algum dos sintomas citados, procure um{' '}
            <TextBlue>MÉDICO</TextBlue> imediatamente. Uma DST não tratada pode
            gerar consequências <TextBlue>GRAVES</TextBlue>, como{' '}
            <TextBlue>IMPOTÊNCIA</TextBlue>, incapacidade de ter{' '}
            <TextBlue>FILHOS</TextBlue> e até <TextBlue>CÂNCER</TextBlue>.
            Lembre-se: a melhor forma de prevenção é a proteção. Use camisinha!
            Outra dica: não aceite
            <TextBlue> SUGESTÕES</TextBlue> de amigos ou parentes sobre esse ou
            aquele <TextBlue>REMÉDIO</TextBlue>. Só o médico pode indicar o
            tratamento correto para a DST.
          </Paragraph>

          <Button last onClick={() => goPage('caca-palavras2')}>
            Jogar!
          </Button>
        </S.Container>
      </Content>
      <CircularButton onClick={() => goPage('final')} />
    </Container>
  );
}

export default Page9;
