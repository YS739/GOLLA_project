import React, { useState } from 'react';
import {
    CommentBox,
    ToggleBtn,
    IconBox,
    CateIcon,
    CommentDatail,
    NameDateBox,
    Name,
    Date,
    Content,
    EditInput
  } from './style';
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditDeleteComment from '../EditDeleteComment';
import { colors } from '../../../../common/color';
import { getDate } from '../../../../common/util';
import { editComment } from '../../../../common/api';
import { useMutation, useQueryClient } from 'react-query';

const Comment = ({comment}: CommentProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);
    const queryClient = useQueryClient();

    const { mutate: editMutate } = useMutation(editComment, {
        onSuccess: () => {
          queryClient.invalidateQueries("comments")
        }
      });
    
    return (
        <CommentBox>
            <IconBox>
                <CateIcon color={comment.isA ? colors.RED : colors.BLUE}>
                    <p>{comment.isA ? "A" : "B"}</p>
                </CateIcon>
            </IconBox>
            <CommentDatail>
                <NameDateBox>
                    <Name>{comment.nickName}</Name>
                    <Date>{getDate(comment.createdAt)}</Date>
                </NameDateBox>
                { isInputOpen 
                // TODO: ref로 focus??
                // 댓글 수정할 때 a,b도 다시 선택할 수 있게?? 그럼 모달로 띄워야 되나?
                ? <EditInput value={editContent} onChange={(e) => setEditContent(e.target.value)}/>
                : <Content>
                    {comment.content}
                </Content> }
            </CommentDatail>
            <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
                <BsThreeDotsVertical size="22" />
            </ToggleBtn>
            {isOpen && <EditDeleteComment comment={comment} setIsOpen={setIsOpen} setIsInputOpen={setIsInputOpen} />}
        </CommentBox>
    )
};

export default Comment;