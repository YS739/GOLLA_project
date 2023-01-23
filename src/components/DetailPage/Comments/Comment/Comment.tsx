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
  } from './style';
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditDeleteComment from '../EditDeleteComment';
import { colors } from '../../../../common/color';
import { getDate } from '../../../../common/util';

const Comment = ({comment}: CommentProps) => {

    const [isOpen, setIsOpen] = useState(false);

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
            <Content>
                {comment.content}
            </Content>
            </CommentDatail>
            <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
                <BsThreeDotsVertical size="22" />
            </ToggleBtn>
            {isOpen && <EditDeleteComment comment={comment} />}
        </CommentBox>
    )

};

export default Comment;