import React from "react";
import { EditDeleteBox, BtnBox, Btn } from './style';
import { deleteComment } from '../../../../common/api';
import { useMutation, useQueryClient } from 'react-query';

interface Props {
  comment: CommentItem;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInputOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditDeleteComment = ({comment, setIsOpen, setIsInputOpen}: Props) => {

  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation(deleteComment, {
      onSuccess: () => {
          queryClient.invalidateQueries("comments")
      }
  });

  const editHandler = () => {
    setIsOpen(false);
    setIsInputOpen(true);
  };

  return (
    <EditDeleteBox>
      <BtnBox>
        <Btn onClick={editHandler}>댓글 수정</Btn>
      </BtnBox>
      <BtnBox>
        <Btn onClick={() => deleteMutate(comment.id)}>댓글 삭제</Btn>
      </BtnBox>
    </EditDeleteBox>
  )
};

export default EditDeleteComment;
