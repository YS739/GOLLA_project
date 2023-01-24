import {
  Article,
  CommentCount,
} from './style';
import Comment from '../Comment/Comment';

const GetComments = ({comments}: any) => {

  
  
  return (
    <Article>
      <CommentCount>댓글 {comments?.length}</CommentCount>
      {comments?.map((item: CommentItem) => (
        <Comment comment={item} key={item.id} />
      ))}
    </Article>
  );
};

export default GetComments;