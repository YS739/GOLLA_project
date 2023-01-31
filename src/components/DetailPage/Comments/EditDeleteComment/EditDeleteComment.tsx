import React from "react";
import * as S from './style';
import { deleteComment } from '../../../../common/api';
import { useMutation, useQueryClient } from 'react-query';

interface Props {
  comment: CommentItem;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isInputOpen: boolean,
  setIsInputOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditDeleteComment = ({comment, setIsOpen, isInputOpen, setIsInputOpen}: Props) => {

  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation(deleteComment, {
      onSuccess: () => {
          queryClient.invalidateQueries("comments")
      }
  });

  const editHandler = () => {
    setIsOpen(false);
    setIsInputOpen(!isInputOpen);
  };

  return (
    <S.EditDeleteBox>
      <S.BtnBox>
        <S.Btn onClick={editHandler}>댓글 수정</S.Btn>
      </S.BtnBox>
      <S.BtnBox>
        <S.Btn onClick={() => deleteMutate(comment.id)}>댓글 삭제</S.Btn>
      </S.BtnBox>
    </S.EditDeleteBox>
  )
};

export default EditDeleteComment;
