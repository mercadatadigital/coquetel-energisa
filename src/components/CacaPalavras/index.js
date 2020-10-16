import React, { useState } from 'react';
import _ from 'lodash';

import Cell from '../Cell';

import * as S from './styles';

function CacaPalavras({ words, matriz, onSelect }) {
  const [selecteds, setSelecteds] = useState([]);
  const [finisheds, setFinisheds] = useState([]);

  const select = (point) => {
    const word = selecteds
      .map((point) => matriz[point[0]][point[1]])
      .concat([matriz[point[0]][point[1]]])
      .join('');

    if (words.indexOf(word) >= 0) {
      onSelect((old) => old.concat([word]));
      const complete_word = selecteds.concat([point]);
      setFinisheds((old) => old.concat([complete_word]));
    }

    if (selecteds.length > 0) {
      const valids = selecteds.filter((selected) => {
        const [a, b] = direction(selected, point);

        let dir = [a, b];

        if (selecteds.length > 1) {
          dir = direction(selecteds[0], selecteds[1]);
        }

        if (!_.isEqual([a, b], dir)) {
          return false;
        }

        const c = Math.sqrt(a * a + b * b);
        return Math.round(c) <= 1;
      });

      if (valids.length > 0) {
        setSelecteds((old) => old.concat([point]));
        return;
      }
    }
    setSelecteds([point]);
  };

  const direction = (first, second) => {
    const a = first[0] - second[0];
    const b = first[1] - second[1];
    return [a, b];
  };

  const isFinished = (point) => {
    const is =
      finisheds.filter(
        (word) => word.filter((pos) => _.isEqual(pos, point)).length > 0
      ).length > 0;
    return is;
  };

  return (
    <S.Container>
      {matriz.map((row, row_index) => (
        <S.Row key={row_index}>
          {row.map((column, column_index) => {
            const point = [row_index, column_index];
            return (
              <Cell
                key={point}
                selected={
                  selecteds.filter((value) => _.isEqual(value, point)).length >
                  0
                }
                finished={isFinished(point)}
                onClick={() => select(point)}
                letter={column}
              />
            );
          })}
        </S.Row>
      ))}
    </S.Container>
  );
}

export default CacaPalavras;
