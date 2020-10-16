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

function Page4() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/3')} direction="back" />
      <Content>
        <Header>DOMINOX</Header>
        <S.Container>
          <Italic>
            Preencha o diagrama, respeitando os cruzamentos, com as palavras em
            destaque no texto.
          </Italic>
          <Subtitle>Equipamentos de Proteção</Subtitle>
          <Subtitle> EPC e EPI</Subtitle>
          <Paragraph>
            EPC é a sigla para Equipamento de Proteção Coletiva, usado para
            minimizar ou anular riscos presentes no ambiente de trabalho. EPI é
            o Equipamento de Proteção Individual, que protege o trabalhador
            diretamente evitando que este seja exposto a riscos e doenças
            ocupacionais que possam comprometer sua capacidade laboral. O
            colaborador deve fazer bom uso dos equipamentos cumprindo todas as
            orientações sobre a utilização adequada do EPI.
          </Paragraph>
          <S.Content>
            <Paragraph>
              Tipos de EPCs: • Extintor, mangueira e HIDRANTE; • CAPELA Química
              (exaustor de vapores e gases tóxicos); • Lava-olhos e chuveiros de
              emergência; • EXAUSTORES, sistemas de ventilação e controle de
              temperatura; • Corrimão, guarda-corpos e redes de proteção; •
              Isolação acústica; • Sinalizações de segurança, como: cones,
              cavaletes, placas de aviso, sinalização de saída de emergência.
            </Paragraph>
            <Paragraph>
              Tipos de EPIs: • CAPACETE; • Protetor e ABAFADOR de ouvido; •
              MÁSCARA filtrante para gases e aerossóis, RESPIRADOR facial e
              semifacial, óculos e viseiras; • LUVAS, braçadeiras e mangotes; •
              SAPATO, bota e coturno; • CINTO de segurança, arnês (armadura) e
              sistemas antiquedas; • COLETE e avental.
            </Paragraph>
          </S.Content>
          <Button last onClick={() => goPage('caca-palavras1')}>
            Jogar!
          </Button>
        </S.Container>
      </Content>
      <CircularButton onClick={() => goPage('5')} />
    </Container>
  );
}

export default Page4;
