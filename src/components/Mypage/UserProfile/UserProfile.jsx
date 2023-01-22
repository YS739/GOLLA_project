import React from 'react';
import { colors } from '../../../common/color';
import {
  Article,
  TitleBtn,
  Title,
  TitleBox,
  CardBox,
  CardDiv,
  CardName,
  CardContent,
  CardBtn,
} from './style';

const UserProfile = () => {
  return (
    <>
      <Article>
        <TitleBox>
          <Title>
            <a style={{ color: colors.blue }}>심바아빠</a>님의 프로필
          </Title>
          <div>
            <TitleBtn>로그아웃</TitleBtn>
            <TitleBtn style={{ color: 'Red' }}>회원탈퇴</TitleBtn>
          </div>
        </TitleBox>
        <CardBox>
          <CardDiv>
            <CardName>ID:</CardName>
            <CardContent>psh5575</CardContent>
          </CardDiv>
          <CardDiv>
            <CardName>닉네임:</CardName>
            <CardContent>심바아빠</CardContent>
            <CardBtn>닉네임 변경</CardBtn>
          </CardDiv>
        </CardBox>
      </Article>
    </>
  );
};
export default UserProfile;
