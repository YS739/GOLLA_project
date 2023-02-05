import styled from 'styled-components';

export const Btn = styled.button`
  all: unset;
  font-size: 30px;
  cursor: pointer;
`;
export const Modal = styled.div`
  width: 800px;
  height: 400px;
  text-align: end;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 500px;
    height: 300px;
  }
`;

export const ModalDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GuideBox = styled.div`
  width: 100%;
  height: 40%;
  font-size: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const IconBox = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconDiv = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 30px;
  }
`;

export const IconText = styled.p`
  font-weight: 700;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  height: 50px;
`;

export const InputTitle = styled.div`
  width: 10%;
  padding-right: 10px;
  height: 30px;
`;
export const InputText = styled.input`
  width: 30%;
  height: 40px;
  border: 1px solid gray;
  padding-left: 10px;
  font-size: 22px;
`;

export const CompleteBtn = styled.button<{ backgroudColor?: string }>`
  margin-top: 30px;
  margin-left: 5px;
  width: 120px;
  height: 50px;
  font-size: 22px;
  background-color: ${(props) => props.backgroudColor};
  color: white;
  border: none;
  padding: 10;
  border-radius: 5px;

  cursor: pointer;
`;
