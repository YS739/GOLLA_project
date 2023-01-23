import React, { useState } from 'react';
import { colors } from '../../../../common/color';
import {
  Article,
  CategoryBox,
  Category,
  AddCommentBox,
  CommentInput,
  AddBtn,
} from './style';
import { postTime } from '../../../../common/util';
import { useMutation, useQueryClient } from 'react-query';
import { addComment } from '../../../../common/api';

const AddComment = () => {

  const [content, setContent] = useState("");
  const [isA, setIsA] = useState<null | boolean>(null);
  const queryClient = useQueryClient();

  const newComment = {
    content,
    createdAt: postTime(),
    isA,
    nickName: "가을",
    postId: "1",
    userId: "uid"
  };

  // A, B 선택에 따라 boolean 출력
  const selectAB = (e: any) => {
    if ( e.target.value === "true" ) {
      setIsA(true);
    } else {
      setIsA(false);
    }
  };

  // 댓글 작성하기
  const addCommentHandler = async () => {
    if (!content && isA === null ) {
      alert("댓글을 입력해주세요.")
    } else if (!content) {
      alert("댓글을 입력해주세요.")
    } else if (isA === null) {
      alert("A, B 중에 하나를 선택해주세요.")
    } else {
      addMutate(newComment)
      setContent("")
    }
  };

  const { mutate: addMutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments")
    }
  })

  return (
    <Article>
      <CategoryBox>
        <Category color={colors.RED}>
          <input onChange={selectAB} type="radio" name="category" value="true" />
          <label htmlFor="A"> A: 짜장면을 먹을까요</label>
        </Category>
        <Category color={colors.BLUE}>
          <input onChange={selectAB} type="radio" name="category" value="false" />
          <label htmlFor="B"> B: 짬뽕을 먹을까요</label>
        </Category>
      </CategoryBox>
      <AddCommentBox>
        <CommentInput value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="댓글을 입력해주세요." />
        <AddBtn onClick={addCommentHandler}>댓글 등록</AddBtn>
      </AddCommentBox>
    </Article>
  );
};

export default AddComment;