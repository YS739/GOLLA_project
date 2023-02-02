import React, { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../common/color';
import * as S from './style';
import { collection } from 'firebase/firestore';
import { db } from '../../common/firebase';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';

type UploadPageJ = () => any;

const UploadPage: UploadPageJ = () => {
  const navigate = useNavigate();

  const ref = collection(db, 'posts');
  const mutation = useFirestoreCollectionMutation(ref);

  const title_input = useRef<HTMLInputElement>(null);
  const content_textarea = useRef<HTMLTextAreaElement>(null);
  const categoryA_input = useRef<HTMLInputElement>(null);
  const categoryB_input = useRef<HTMLInputElement>(null);

  const PostSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const title = title_input.current?.value;
    const content = content_textarea.current?.value;
    const categoryA = categoryA_input.current?.value;
    const categoryB = categoryB_input.current?.value;

    if (title && content && categoryA && categoryB) {
      const newPost: postJ = {
        title: title,
        content: content,
        createdAt: new Date(),
        // TODO: new Date().toLocaleString("ko-KR") 로 변경?
        categoryA: categoryA,
        categoryB: categoryB,
        // likes: [],
        // userId: authService.currentUser.uid,
        // nickName: authService.currentUser.displayname
      };
      mutation.mutate(newPost);

      // TODO: ${post.id}로 바꾸기
      navigate(`/:id`);
      alert('등록 완료');
    } else {
      if (title?.trim().length === 0) {
        alert('제목을 입력해주세요.');
        title_input.current?.focus();
      } else if (content?.trim().length === 0) {
        alert('내용을 입력해주세요.');
        content_textarea.current?.focus();
      } else if (categoryA?.trim().length === 0) {
        alert('A 내용을 입력해주세요.');
        categoryA_input.current?.focus();
      } else if (categoryB?.trim().length === 0) {
        alert('B 내용을 입력해주세요.');
        categoryB_input.current?.focus();
      }
    }
  };

  return (
    <S.Section>
      <S.Article>
        <S.PostForm onSubmit={PostSubmitHandler}>
          <S.WritingBox>
            <S.PostTitleBox>
              <S.PostTitle>제목</S.PostTitle>
              <S.TitleInput ref={title_input} />
            </S.PostTitleBox>
            <S.PostContentBox>
              <S.PostContent>내용</S.PostContent>
              <S.ContentTextarea ref={content_textarea} />
            </S.PostContentBox>
          </S.WritingBox>
          <S.CategoryBox>
            <S.ABox>
              <S.CategoryA color={colors.RED}>A</S.CategoryA>
              <input ref={categoryA_input} />
            </S.ABox>
            <S.BBox>
              <S.CategoryB color={colors.BLUE}>B</S.CategoryB>
              <input ref={categoryB_input} />
            </S.BBox>
          </S.CategoryBox>
          <div style={{ width: '100%' }}>
            <S.AddBtn>등록</S.AddBtn>
          </div>
        </S.PostForm>
      </S.Article>
    </S.Section>
  );
};

export default UploadPage;
