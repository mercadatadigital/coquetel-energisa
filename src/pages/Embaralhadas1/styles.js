import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: end;
  margin-left: 50px;
  color: black;
  gap: 5px;

  p {
    font-weight: bold;
  }
`;

export const Input = styled.input`
  width: 60px;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 3px solid ${({ border }) => border};
  line-height: 0;
  background: ${({ background }) => background};
  padding: 5px;
  padding-top: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${({ border }) => border};

  :focus {
    filter: brightness(95%);
  }
`;

export const BoxGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  background: #e1e1e1;
  width: 100%;
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  &:first-child {
    margin: 0;
  }
`;

export const Textimage = styled.div`
  img {
    float: left;
    width: 50%;
    margin: 20px 20px 20px 0;
  }

  margin-bottom: 10px;
`;

export const Bullet = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
`;
