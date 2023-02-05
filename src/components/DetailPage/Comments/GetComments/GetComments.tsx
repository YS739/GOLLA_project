import * as S from './style';
import Comment from '../Comment/Comment';

const GetComments = ({comments}: any) => {

  return (
    <S.Article>
      <S.CommentCount>댓글 {comments?.length}</S.CommentCount>
      {comments?.map((item: CommentItem) => (
        <Comment comment={item} key={item.id} />
      ))}
    </S.Article>
  );
};

export default GetComments;