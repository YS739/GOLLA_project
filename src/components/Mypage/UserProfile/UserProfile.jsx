import React from 'react';
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
          <Title>심바아빠님의 프로필</Title>
          <TitleBtn>로그아웃</TitleBtn>
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
