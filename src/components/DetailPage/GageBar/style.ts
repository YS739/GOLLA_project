import styled from "styled-components";

// GageBar
export const GageBarContainer = styled.div`
  width: 80%;
  height: 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

export const Percent = styled.div<{color: string, percent: number}>`
  width: ${(props) => `${props.percent}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
`;