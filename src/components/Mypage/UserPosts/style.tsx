import styled from 'styled-components';

const Article = styled.article`
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 20px;
  width: 100%;
  max-width: 900px;
`;

const CardBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 95%;
  height: 100px;
  margin: 10px;
`;

const CardName = styled.div`
  border: 1px solid lawngreen;
`;

const CardContent = styled.div`
  border: 1px solid navajowhite;
`;
const CardBtn = styled.button``;

export { Article, CardBox, CardName, CardContent, CardBtn };
