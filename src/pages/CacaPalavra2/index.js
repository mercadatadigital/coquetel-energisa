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

import icon from '../../assets/plus.svg';

const words = [
  'sintomas',
  'vermelhidao',
  'corrimentos',
  'verrugas',
  'coceira',
  'exames',
  'sangue',
  'diagnosticadas',
  'medico',
  'graves',
  'impotencia',
  'filhos',
  'cancer',
  'sugestoes',
  'remedio',
];

function CacaPalavra2() {
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
              <Header src={icon}>CAÇA-PALAVRAS</Header>

              <br />
              <S.Words>
                <Paragraph>
                  Palavras:{' '}
                  <span>
                    {renderWord('sintomas', 'sintomas')},{' '}
                    {renderWord('vermelhidao', 'vermelhidão')},{' '}
                    {renderWord('corrimentos', 'corrimentos')},{' '}
                    {renderWord('verrugas', 'verrugas')},{' '}
                    {renderWord('coceira', 'coceira')},{' '}
                    {renderWord('exames', 'exames')},{' '}
                    {renderWord('sangue', 'sangue')},{' '}
                    {renderWord('diagnosticadas', 'diagnosticadas')},{' '}
                    {renderWord('medico', 'médico')},{' '}
                    {renderWord('graves', 'graves')},{' '}
                    {renderWord('impotencia', 'impotência')},{' '}
                    {renderWord('filhos', 'filhos')},{' '}
                    {renderWord('cancer', 'câncer')},{' '}
                    {renderWord('sugestoes', 'sugestões')},{' '}
                    {renderWord('remedio', 'remédios')},{' '}
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
              <Button onClick={() => goPage('9')}>Voltar</Button>
            </S.Content>
          </S.Container>
        </Content>
      </Container>
    </>
  );
}

export default CacaPalavra2;
