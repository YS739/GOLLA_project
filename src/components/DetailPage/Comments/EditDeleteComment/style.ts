import styled from 'styled-components';

export const EditDeleteBox = styled.div`
  width: 110px;
  height: 70px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10px;
  top: 45px;
  z-index: 2;
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  :hover {
    background-color: lightgray;
  }
`;

export const Btn = styled.div`
  padding: 7px 0;
  cursor: pointer;
`;
