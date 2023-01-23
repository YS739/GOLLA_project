import React from 'react';
import {
  Article,
  CommentCount,
} from './style';
import Comment from '../Comment/Comment';

const GetComments = () => {

  return (
    <Article>
      <CommentCount>댓글 3</CommentCount>
      <Comment />
    </Article>
  );
};

export default GetComments;