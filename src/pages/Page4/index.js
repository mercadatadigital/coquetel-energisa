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
import TextBlueSmall from '../../components/TextBlueSmall';

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
          <br />
          <S.Content>
            <ParagraphList>
              Tipos de EPCs:
              <div className="margin">
                <S.Bullet>•</S.Bullet> Extintor, mangueira e{' '}
                <TextBlueSmall>HIDRANTE</TextBlueSmall>;
                <br />
                <S.Bullet>• </S.Bullet>
                <TextBlueSmall>CAPELA</TextBlueSmall> Química (exaustor de
                vapores e gases tóxicos);
                <br />
                <S.Bullet>•</S.Bullet> Lava-olhos e chuveiros de emergência;
                <br />
                <S.Bullet>•</S.Bullet> <TextBlueSmall>EXAUSTORES</TextBlueSmall>
                , sistemas de ventilação e controle de temperatura;
                <br />
                <S.Bullet>•</S.Bullet> Corrimão, guarda-corpos e redes de
                proteção;
                <br />
                <S.Bullet>•</S.Bullet> Isolação acústica;
                <br />
                <S.Bullet>•</S.Bullet> Sinalizações de segurança, como: cones,
                cavaletes, placas de aviso, sinalização de saída de emergência.
              </div>
            </ParagraphList>
            <ParagraphList>
              Tipos de EPIs:
              <div className="margin">
                <S.Bullet>•</S.Bullet> <TextBlueSmall>CAPACETE</TextBlueSmall>;
                <br />
                <S.Bullet>•</S.Bullet> Protetor e ABAFADOR de ouvido;
                <br />
                <S.Bullet>
                  •
                </S.Bullet> <TextBlueSmall>MÁSCARA</TextBlueSmall> filtrante
                para gases e aerossóis,{' '}
                <TextBlueSmall>RESPIRADOR </TextBlueSmall>
                facial e semifacial, óculos e viseiras;
                <br />
                <S.Bullet>•</S.Bullet> <TextBlueSmall>LUVAS</TextBlueSmall>,
                braçadeiras e mangotes;
                <br />
                <S.Bullet>•</S.Bullet> <TextBlueSmall>SAPATO</TextBlueSmall>,
                bota e coturno;
                <br />
                <S.Bullet>•</S.Bullet> <TextBlueSmall>CINTO</TextBlueSmall> de
                segurança, arnês (armadura) e sistemas antiquedas;
                <br />
                <S.Bullet>
                  •
                </S.Bullet> <TextBlueSmall>COLETE</TextBlueSmall> e avental.
              </div>
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
