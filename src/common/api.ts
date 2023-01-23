import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

// 댓글 추가하기
export const addComment = async(newComment: AddCommentItem) => {
    await addDoc(collection(db, "comments"), newComment)
};

// 댓글 수정하기
// FIXME: 객체 타입 수정하기
export const editComment = async({id, editObj}: any) => {
    await updateDoc(doc(db, "comments", id), editObj) 
};

// 댓글 삭제하기
export const deleteComment = async (id: string) => {
    if ( window.confirm("댓글을 정말 삭제하시겠습니까?")) {
        await deleteDoc(doc(db, "comments", id))
    }
};
