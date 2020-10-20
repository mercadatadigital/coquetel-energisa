import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import ParagraphList from '../../components/ParagraphList';
import CircularButton from '../../components/CircularButton';
import Subtitle from '../../components/Subtitle';
import TextBlue from '../../components/TextBlue';
import Italic from '../../components/Italic';
import Button from '../../components/Button';
import icon from '../../assets/dominox.svg';

function Page4() {
  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <CircularButton onClick={() => goPage('/3')} direction="back" />
      <Content>
        <Header src={icon}>DOMINOX</Header>
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
            <ParagraphList>
              Tipos de EPCs:
              <br />• Extintor, mangueira e <TextBlue>HIDRANTE</TextBlue>;
              <br />• <TextBlue>CAPELA</TextBlue> Química (exaustor de vapores e
              gases tóxicos);
              <br />• Lava-olhos e chuveiros de emergência;
              <br />• <TextBlue>EXAUSTORES</TextBlue>, sistemas de ventilação e
              controle de temperatura;
              <br />• Corrimão, guarda-corpos e redes de proteção;
              <br />• Isolação acústica;
              <br />• Sinalizações de segurança, como: cones, cavaletes, placas
              de aviso, sinalização de saída de emergência.
            </ParagraphList>
            <ParagraphList>
              Tipos de EPIs:
              <br />• <TextBlue>CAPACETE</TextBlue>;
              <br />• Protetor e ABAFADOR de ouvido;
              <br />• <TextBlue>MÁSCARA</TextBlue> filtrante para gases e
              aerossóis, <TextBlue>RESPIRADOR </TextBlue>
              facial e semifacial, óculos e viseiras;
              <br />• <TextBlue>LUVAS</TextBlue>, braçadeiras e mangotes;
              <br />• <TextBlue>SAPATO</TextBlue>, bota e coturno;
              <br />• <TextBlue>CINTO</TextBlue> de segurança, arnês (armadura)
              e sistemas antiquedas;
              <br />• <TextBlue>COLETE</TextBlue> e avental.
            </ParagraphList>
          </S.Content>
          <Button last onClick={() => goPage('dominox1')}>
            Jogar!
          </Button>
        </S.Container>
      </Content>
      <CircularButton onClick={() => goPage('5')} />
    </Container>
  );
}

export default Page4;
