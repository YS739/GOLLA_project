import styled from 'styled-components';

const Article = styled.article`
  border: 5px solid rebeccapurple;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
`;

const CardBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const CardName = styled.div`
  border: 1px solid lawngreen;
`;

const CardContent = styled.div`
  border: 1px solid navajowhite;
`;
const CardBtn = styled.button``;

export { Article, CardBox, CardName, CardContent, CardBtn };
