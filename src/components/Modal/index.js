import React from 'react';
import VideoPlayer from 'react-player';

import { IoMdCloseCircle } from 'react-icons/io';
import * as S from './styles';

function Modal({ src, open, setOpen, children }) {
  return (
    <S.Container open={open}>
      <div className="modal">
        <div className="header">
          <button onClick={setOpen}>
            <IoMdCloseCircle />
          </button>
        </div>
        {src && (
          <div className="video">
            <VideoPlayer
              url={src}
              controls
              width="100%"
              style={{ backgroundColor: 'black' }}
            />
          </div>
        )}
        {children}
      </div>
    </S.Container>
  );
}

export default Modal;
