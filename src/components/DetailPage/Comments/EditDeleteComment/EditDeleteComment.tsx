import React from "react";
import { EditDeleteBox, BtnBox, Btn } from './style';
import { deleteComment } from '../../../../common/api';
import { useMutation, useQueryClient } from 'react-query';

const EditDeleteComment = ({comment}: CommentProps) => {

  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation(deleteComment, {
      onSuccess: () => {
          queryClient.invalidateQueries("comments")
      }
  });

  return (
    <EditDeleteBox>
      <BtnBox>
        <Btn>댓글 수정</Btn>
      </BtnBox>
      <BtnBox>
        <Btn onClick={() => deleteMutate(comment.id)}>댓글 삭제</Btn>
      </BtnBox>
    </EditDeleteBox>
  )
};

export default EditDeleteComment;
