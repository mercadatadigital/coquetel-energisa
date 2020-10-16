import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';

import wordsearch from 'wordsearch';
import Container from '../../components/Container';
import Paragraph from '../../components/Paragraph';
import Content from '../../components/Content';
import Button from '../../components/Button';
import TextThrough from '../../components/TextThrough';

import CacaPalavras from '../../components/CacaPalavras';

import * as S from './styles';
import Header from '../../components/Header';
import CircularButton from '../../components/CircularButton';
import Italic from '../../components/Italic';

const words = [
  'acidente',
  'morte',
  'empresa',
  'equipe',
  'estudo',
  'trabalho',
  'problemas',
  'riscos',
  'pessoas',
  'ambiente',
  'patrimonio',
  'imagem',
  'seguranca',
  'atividade',
  'gravidade',
];

function CacaPalavra1() {
  const [search, setSearch] = useState({ grid: [] });
  const [loading, setLoading] = useState(true);
  const [reopen, setReopen] = useState(0);
  const [winWords, setWinWords] = useState([]);

  useEffect(() => {
    const searchLocal = wordsearch(words, 20, 20, { backwards: 0 });
    setSearch(searchLocal);

    if (searchLocal.unplaced) {
      if (searchLocal.unplaced.length > 0) {
        setReopen(reopen + 1);
      } else {
        setLoading(false);
      }
    }
  }, [reopen]);

  const renderWord = (word, real) => {
    if (winWords.indexOf(word) !== -1) {
      return <TextThrough>{real}</TextThrough>;
    }
    return real;
  };

  const history = useHistory();

  const goPage = (page) => {
    history.push(page);
  };

  return (
    <>
      <Container>
        <Content>
          <S.Container>
            <S.Content>
              <Header>CAÇA-PALAVRAS</Header>
              <Italic>
                Procure e marque, no diagrama de letras, as palavras em destaque
                no texto.
              </Italic>
              <br />
              <S.Words>
                <Paragraph>
                  Palavras:{' '}
                  <span>
                    {renderWord('acidente', 'acidente')},{' '}
                    {renderWord('morte', 'morte')},{' '}
                    {renderWord('empresa', 'empresa')},{' '}
                    {renderWord('equipe', 'equipe')},{' '}
                    {renderWord('estudo', 'estudo')},{' '}
                    {renderWord('trabalho', 'trabalho')},{' '}
                    {renderWord('problemas', 'problemas')},{' '}
                    {renderWord('riscos', 'riscos')},{' '}
                    {renderWord('pessoas', 'pessoas')},{' '}
                    {renderWord('ambiente', 'ambiente')},{' '}
                    {renderWord('patrimonio', 'patrimônio')},{' '}
                    {renderWord('imagem', 'imagem')},{' '}
                    {renderWord('seguranca', 'segurança')},{' '}
                    {renderWord('atividade', 'atividade')},{' '}
                    {renderWord('gravidade', 'gravidade')},{' '}
                  </span>
                  .
                </Paragraph>
                {loading ? (
                  <S.Loading loading>
                    <FaSpinner />
                  </S.Loading>
                ) : (
                  <CacaPalavras
                    matriz={search.grid}
                    words={words}
                    onSelect={setWinWords}
                  />
                )}
              </S.Words>
              <Button onClick={() => goPage('3')}>Voltar</Button>
            </S.Content>
          </S.Container>
        </Content>
      </Container>
    </>
  );
}

export default CacaPalavra1;
