import {
    GageBarContainer,
    Percent,
  } from './style';
  import { colors } from '../../../common/color';

const GageBar = ({comments}: any) => {

    let countA = 0;
    let countB = 0;

    comments.forEach((comment: CommentItem) => {
        comment.isA === true ? countA += 1 : countB += 1
    });

    let ratioA = Math.round(100 - (countB / (countA + countB)) * 100);
    let ratioB = Math.round(100 - (countA / (countA + countB)) * 100);

    // 글 작성 시 초기 세팅값 50:50
    if ( countA === 0 && countB === 0 ) {
        ratioA = 50;
        ratioB = 50;
    }
    
    return (
        <GageBarContainer>
            <Percent color={colors.RED} percent={ratioA}>
                <span style={{display: ratioA === 0 ? "none" : "block"}}>{ratioA}%</span>
            </Percent>
            <Percent color={colors.BLUE} percent={ratioB}>
                <span style={{display: ratioB === 0 ? "none" : "block"}}>{ratioB}%</span>
            </Percent>
        </GageBarContainer>
    )
};

export default GageBar;