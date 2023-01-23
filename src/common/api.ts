import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

// 댓글 추가하기
export const addComment = async(newComment: AddCommentItem) => {
    await addDoc(collection(db, "comments"), newComment)
};

// 댓글 삭제하기
export const deleteComment = async (id: string) => {
    if ( window.confirm("댓글을 정말 삭제하시겠습니까?")) {
        await deleteDoc(doc(db, "comments", id))
    }
};
