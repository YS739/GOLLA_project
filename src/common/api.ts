import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

// 댓글 추가하기
export const addComment = async(newComment: AddCommentItem) => {
    await addDoc(collection(db, "comments"), newComment)
};
