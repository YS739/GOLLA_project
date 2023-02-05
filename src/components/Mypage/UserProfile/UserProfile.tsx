import React from 'react';
import { colors } from '../../../common/color';
import * as S from './style';

const UserProfile = () => {
  return (
    <>
      <S.Article>
        <S.TitleBox>
          <S.Title>
            <a style={{ color: colors.BLUE }}>심바아빠</a>님의 프로필
          </S.Title>
          <div>
            <S.TitleBtn>회원탈퇴</S.TitleBtn>
          </div>
        </S.TitleBox>
        <S.CardBox>
          <S.CardDiv>
            <S.CardName>ID:</S.CardName>
            <S.CardContent>psh5575</S.CardContent>
          </S.CardDiv>
          <S.CardDiv>
            <S.CardName>닉네임:</S.CardName>
            <S.CardContent>심바아빠</S.CardContent>
            <S.CardBtn>닉네임 변경</S.CardBtn>
          </S.CardDiv>
        </S.CardBox>
      </S.Article>
    </>
  );
};
export default UserProfile;
