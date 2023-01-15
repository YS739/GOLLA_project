import styled from 'styled-components';

const Article = styled.article`
  border: 5px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
`;

const TitleBox = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  border: 1px solid green;
`;

const TitleBtn = styled.button`
  border: 1px solid navy;
`;
const CardBox = styled.div`
  border: 1px solid teal;
  padding: 10px;
`;

const CardDiv = styled.div`
  display: flex;
`;

const CardName = styled.div`
  border: 1px solid lawngreen;
`;

const CardContent = styled.div`
  border: 1px solid navajowhite;
`;
const CardBtn = styled.button``;

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
