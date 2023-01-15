import React, { useState } from "react";
import { Article, CommentCount, CommentBox, ToggleBtn,IconBox, CateIcon, CommentDatail, NameDateBox, Name, Date, Content } from "./style"
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditDeleteComment from "../EditDeleteComment";

const GetComments = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Article>
      <CommentCount>댓글 3</CommentCount>
      <CommentBox>
        <IconBox>
          <CateIcon color={"#EC5858"}>A</CateIcon>
        </IconBox>
        <CommentDatail>
          <NameDateBox>
            <Name>닉네임</Name>
            <Date> 2023.01.19 19:23</Date>
          </NameDateBox>
          <Content>댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다.</Content>
        </CommentDatail>
        <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
          <BsThreeDotsVertical size="22" />
        </ToggleBtn>
        {isOpen && <EditDeleteComment />}
      </CommentBox>
      <CommentBox>
        <IconBox>
          <CateIcon color={"#3E6D9C"}>B</CateIcon>
        </IconBox>
        <CommentDatail>
          <NameDateBox>
            <Name>닉네임</Name>
            <Date> 2023.01.19 19:23</Date>
          </NameDateBox>
          <Content>댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다. 댓글 내용입니다.</Content>
        </CommentDatail>
        <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
          <BsThreeDotsVertical size="22" />
        </ToggleBtn>
        {isOpen && <EditDeleteComment />}
      </CommentBox>
    </Article>
  )
};

export default GetComments;
