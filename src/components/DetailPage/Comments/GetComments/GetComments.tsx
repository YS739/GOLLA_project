import React, { useEffect } from 'react';
import {
  Article,
  CommentCount,
} from './style';
import Comment from '../Comment/Comment';
import { query, collection, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../../../common/firebase';
import { useQuery } from 'react-query';

const GetComments = () => {

  useEffect(() => {
    getCommnets();
  }, []);

  // 댓글 데이터 불러오기.
  const getCommnets = async () => {
    const q = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc")
    );

    // FIXME: any말고 다른 방법은 없을지?
    const array: any[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>
      array.push({
        id: doc.id,
      ...doc.data()
      })
    );

    return array;
  };

  const { data: comments, isLoading } = useQuery(
    "comments", getCommnets
  );

  if (isLoading) {
    return (
        <div>로딩 중....</div>
    );
  }
  
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