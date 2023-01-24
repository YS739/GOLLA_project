import {
    GageBarContainer,
    PercentA,
    PercentB,
  } from './style';

const GageBar = ({comments}: any) => {

    return (
        <GageBarContainer>
            <PercentA>40%</PercentA>
            <PercentB>60%</PercentB>
        </GageBarContainer>
    )
}

export default GageBar;