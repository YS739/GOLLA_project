import React, { useState } from 'react';
import { colors } from '../../../../common/color';
import * as S from './style';
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
      alert("A, B 카테고리를 선택해주세요.")
    } else {
      addMutate(newComment)
      setContent("")
    }
  };

  // 엔터 키 눌러서 댓글 작성할 수 있음
  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      addCommentHandler();
    };
  };

  const { mutate: addMutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments")
    }
  })

  return (
    <S.Article>
      <S.CategoryBox>
        <S.Category color={colors.RED}>
          <input onChange={selectAB} type="radio" name="category" value="true" />
          <label htmlFor="A"> A: 짜장면을 먹을까요</label>
        </S.Category>
        <S.Category color={colors.BLUE}>
          <input onChange={selectAB} type="radio" name="category" value="false" />
          <label htmlFor="B"> B: 짬뽕을 먹을까요</label>
        </S.Category>
      </S.CategoryBox>
      <S.AddCommentBox>
        <S.CommentInput value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="댓글을 입력해주세요." onKeyPress={onKeyPress} />
        <S.AddBtn onClick={addCommentHandler}>댓글 등록</S.AddBtn>
      </S.AddCommentBox>
    </S.Article>
  );
};

export default AddComment;