import React from "react";
import { Article, CategoryBox, Category, AddCommentBox,CommentInput, AddBtn } from "./style"

const AddComment = () => {
  return (
    <Article>
      <CategoryBox>
        <Category color={"#EC5858"}>
          <input type="radio" name="category" id="A" value="true" />
          <label for="A"> A:  짜장면을 먹을까요</label>
        </Category>
        <Category color={"#3E6D9C"}>
          <input type="radio" name="category" id="B" value="false" />
          <label for="B"> B:  짬뽕을 먹을까요</label>
        </Category>
      </CategoryBox>
      <AddCommentBox>
        <CommentInput type="text" placeholder="댓글을 입력해주세요."/>
        <AddBtn>댓글 등록</AddBtn>
      </AddCommentBox>
    </Article>
  )
};

export default AddComment;
