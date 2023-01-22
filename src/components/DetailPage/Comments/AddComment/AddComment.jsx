import React from 'react';
import { colors } from '../../../../common/color';
import {
  Article,
  CategoryBox,
  Category,
  AddCommentBox,
  CommentInput,
  AddBtn,
} from './style';

const AddComment = () => {
  return (
    <Article>
      <CategoryBox>
        <Category color={colors.red}>
          <input type="radio" name="category" id="A" value="true" />
          <label htmlFor="A"> A: 짜장면을 먹을까요</label>
        </Category>
        <Category color={colors.blue}>
          <input type="radio" name="category" id="B" value="false" />
          <label htmlFor="B"> B: 짬뽕을 먹을까요</label>
        </Category>
      </CategoryBox>
      <AddCommentBox>
        <CommentInput type="text" placeholder="댓글을 입력해주세요." />
        <AddBtn>댓글 등록</AddBtn>
      </AddCommentBox>
    </Article>
  );
};

export default AddComment;
