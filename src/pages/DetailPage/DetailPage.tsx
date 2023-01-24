import {
  Section,
  Post,
  PostEditDeleteBox,
  Btn,
  PrevNextPost,
  BtnBox,
  PrevNextBtn,
} from './style';
import AddComment from '../../components/DetailPage/Comments/AddComment';
import GetComments from '../../components/DetailPage/Comments/GetComments';
import { FcPrevious, FcNext } from 'react-icons/fc';
import React from 'react';
import GageBar from '../../components/DetailPage/GageBar';

const DetailPage = () => {
  return (
    <Section>
      {/* TODO: 본문 수정/삭제, 이전 글/다음 글 컴포넌트 분리 */}
      <PostEditDeleteBox>
        <Btn>수정</Btn>
        <Btn>삭제</Btn>
      </PostEditDeleteBox>
      <Post>본문 들어갈 자리</Post>
      <GageBar />
      <PrevNextPost>
        <BtnBox>
          <FcPrevious style={{ color: 'black' }} />
          <PrevNextBtn>이전 글</PrevNextBtn>
        </BtnBox>
        <BtnBox>
          <PrevNextBtn>다음 글</PrevNextBtn>
          <FcNext />
        </BtnBox>
      </PrevNextPost>
      <AddComment />
      <GetComments />
    </Section>
  );
};

export default DetailPage;
