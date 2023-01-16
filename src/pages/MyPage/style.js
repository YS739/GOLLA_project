import styled from 'styled-components';

const Section = styled.div`
  width: 85%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  width: 100%;
`;

const Btn = styled.button`
  all: unset;
  font-size: 25px;
  font-weight: 700;
  padding-right: 15px;
  :hover {
    border-bottom: 3px solid black;
  }
`;

export { Section, Div, Btn };
