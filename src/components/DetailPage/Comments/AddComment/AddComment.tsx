import React, { useRef, useState } from 'react';
import { colors } from '../../../../common/color';
import * as S from './style';
import { postTime } from '../../../../common/util';
import { useMutation, useQueryClient } from 'react-query';
import { addComment } from '../../../../common/api';

const AddComment = () => {

  const queryClient = useQueryClient();

  // 댓글 작성 내용
  const [content, setContent] = useState("");
  // A, B 선택 여부
  const [isA, setIsA] = useState<null | boolean>(null);
  // A, B 선택 input에 연결
  const radioInput = useRef<HTMLInputElement>(null);

  const newComment = {
    content,
    createdAt: postTime(),
    isA,
    nickName: "가을",
    postId: "1",
    userId: "uid"
  };

  // A, B 선택에 따라 boolean 출력
  const selectAB = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ( e.target.value === "true" ) {
      setIsA(true);
    } else {
      setIsA(false);
    }
  };

  // 댓글 작성하기
  //TODO: A,B 선택도 초기화하기
  const addCommentHandler = async () => {
    if (!content && isA === null ) {
      alert("댓글을 입력해주세요.")
    } else if (!content) {
      alert("댓글을 입력해주세요.")
    } else if (isA === null) {
      alert("A, B 카테고리를 선택해주세요.")
    // } else if (content && isA !== null && radioInput.current) {
    } else {
      addMutate(newComment)
      setContent("")
      // radioInput.current.forEach((item) => item.checked = false)
    }
  };

  // 엔터 키 눌러서 댓글 작성할 수 있음
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
          <input onChange={selectAB} ref={radioInput} type="radio" name="category" value="true" />
          <label htmlFor="A"> A: 짜장면을 먹을까요</label>
        </S.Category>
        <S.Category color={colors.BLUE}>
          <input onChange={selectAB} ref={radioInput} type="radio" name="category" value="false" />
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