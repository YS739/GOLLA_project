import React, { useState } from 'react';
import * as S from './style';
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditDeleteComment from '../EditDeleteComment';
import { colors } from '../../../../common/color';
import { getDate } from '../../../../common/util';
import { editComment } from '../../../../common/api';
import { useMutation, useQueryClient } from 'react-query';

const Comment = ({ comment }: CommentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const queryClient = useQueryClient();

  // 엔터 키 눌러서 댓글 작성할 수 있음
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      editMutate({ id: comment.id, editObj: { content: editContent } });
    }
  };

  // 댓글 수정 후 [등록] 버튼 클릭 시 작동
  //FIXME: any 타입 수정하기
  const { mutate: editMutate }: any = useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      setIsInputOpen(false);
    },
  });

  return (
    <S.CommentBox>
      <S.IconBox>
        <S.CateIcon color={comment.isA ? colors.RED : colors.BLUE}>
          <p>{comment.isA ? 'A' : 'B'}</p>
        </S.CateIcon>
      </S.IconBox>
      <S.CommentDatail>
        <S.NameDateBox>
          <S.Name>{comment.nickName}</S.Name>
          <S.Date>{getDate(comment.createdAt)}</S.Date>
        </S.NameDateBox>

        {isInputOpen ? (
          // [댓글 수정] 버튼 클릭 시 나타나는 부분
          <>
            <S.EditInput
              autoFocus
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              onKeyPress={onKeyPress}
            />
            {/* TODO: 수정 취소 버튼도 만들까?? */}
            <S.EditBtn
              onClick={() =>
                editMutate({
                  id: comment.id,
                  editObj: { content: editContent },
                })
              }
            >
              등록
            </S.EditBtn>
          </>
        ) : (
          <S.Content>{comment.content}</S.Content>
        )}

      </S.CommentDatail>
      <S.ToggleBtn onClick={() => setIsOpen(!isOpen)}>
        <BsThreeDotsVertical size="22" />
      </S.ToggleBtn>
      {isOpen && (
        <EditDeleteComment
          comment={comment}
          setIsOpen={setIsOpen}
          isInputOpen={isInputOpen}
          setIsInputOpen={setIsInputOpen}
        />
      )}
    </S.CommentBox>
  );
};

export default Comment;


