import styled from 'styled-components';
import { colors } from '../../../common/color';

const Article = styled.article`
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const TitleBtn = styled.button`
  all: unset;
  font-size: 15px;
  text-decoration: underline;
  padding-left: 10px;

  cursor: pointer;
`;
const CardBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const CardDiv = styled.div`
  display: flex;
  font-size: 25px;
  width: 95%;
  max-width: 900px;
`;

const CardName = styled.div`
  padding-right: 10px;
`;

const CardContent = styled.div`
  padding-right: 10px;
`;
const CardBtn = styled.button`
  color: white;
  background-color: ${colors.blue};
  font-size: 20px;
  border: 1px solid ${colors.blue};
  border-radius: 5px;

  cursor: pointer;
`;

export {
  TitleBox,
  Title,
  TitleBtn,
  Article,
  CardBox,
  CardDiv,
  CardName,
  CardContent,
  CardBtn,
};
