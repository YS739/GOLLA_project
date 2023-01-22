import React from "react";
import { EditDeleteBox, BtnBox, Btn } from './style';

const EditDeleteComment = () => {
  return (
    <EditDeleteBox>
      <BtnBox>
        <Btn>댓글 수정</Btn>
      </BtnBox>
      <BtnBox>
        <Btn>댓글 삭제</Btn>
      </BtnBox>
    </EditDeleteBox>
  )
};

export default EditDeleteComment;
