import styled from "styled-components";
import { colors } from "../../../common/color";

// GageBar
export const GageBarContainer = styled.div`
  width: 80%;
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const PercentA = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${colors.RED};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
`;

export const PercentB = styled(PercentA)`
  width: 60%;
  background-color: ${colors.BLUE};
`;