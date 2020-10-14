import styled from 'styled-components';

export const Mainheader = styled.div`
  display: flex;
  padding: 0 10px;

  justify-content: center;
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};

  color: #fff;
  font-size: 16px;

  margin-bottom: 10px;

  text-align: center;
  position: relative;
`;
