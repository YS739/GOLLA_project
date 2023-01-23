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

const Comment = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <CommentBox>
            <IconBox>
            <CateIcon color={colors.RED}>
                <p>A</p>
            </CateIcon>
            </IconBox>
            <CommentDatail>
            <NameDateBox>
                <Name>닉네임</Name>
                <Date> 2023.01.19 19:23</Date>
            </NameDateBox>
            <Content>
                댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다.
                댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다.
                댓글 내용입니다. 댓글 내용입니다.
            </Content>
            </CommentDatail>
            <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
            <BsThreeDotsVertical size="22" />
            </ToggleBtn>
            {isOpen && <EditDeleteComment />}
        </CommentBox>
    )

};

export default Comment;