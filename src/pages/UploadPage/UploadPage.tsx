import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../common/color';
import * as S from './style';
import { useMutation, useQueryClient } from 'react-query';
import { addPost } from '../../common/api';
import { authService } from '../../common/firebase';

type UploadPageJ = () => any;

const UploadPage: UploadPageJ = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const title_input = useRef<HTMLInputElement>(null);
  const content_textarea = useRef<HTMLTextAreaElement>(null);
  const categoryA_input = useRef<HTMLInputElement>(null);
  const categoryB_input = useRef<HTMLInputElement>(null);

  // FIXME: title_input value와 중복..
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [categoryA, setCategoryA] = useState<string>('');
  const [categoryB, setCategoryB] = useState<string>('');

  // FIXME: 등록 버튼 함수 밖으로 빼면 undefined 뜸
  // const title = title_input.current?.value;
  // const content = content_textarea.current?.value;
  // const categoryA = categoryA_input.current?.value;
  // const categoryB = categoryB_input.current?.value;

  // Post 등록하기
  const newPost = {
    title,
    content,
    createdAt: new Date(),
    categoryA,
    categoryB,
    // likes: [],
    userId: authService.currentUser?.uid,
    nickName: authService.currentUser?.displayName,
  };

  const { mutate: addPostMutate } = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const PostSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert('제목을 입력해주세요.');
      title_input.current?.focus();
    } else if (content.trim().length === 0) {
      alert('내용을 입력해주세요.');
      content_textarea.current?.focus();
    } else if (categoryA.trim().length === 0) {
      alert('A 내용을 입력해주세요.');
      categoryA_input.current?.focus();
    } else if (categoryB.trim().length === 0) {
      alert('B 내용을 입력해주세요.');
      categoryB_input.current?.focus();
    } else {
      addPostMutate(newPost);
      // TODO: ${post.id}로 바꾸기
      navigate(`/:id`);
      alert('등록 완료');
    }
  };

  return (
    <S.Section>
      <S.Article>
        <S.PostForm onSubmit={PostSubmitHandler}>
          <S.WritingBox>
            <S.PostTitleBox>
              <S.PostTitle>제목</S.PostTitle>
              <S.TitleInput
                ref={title_input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.PostTitleBox>
            <S.PostContentBox>
              <S.PostContent>내용</S.PostContent>
              <S.ContentTextarea
                ref={content_textarea}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </S.PostContentBox>
          </S.WritingBox>
          <S.CategoryBox>
            <S.ABox>
              <S.CategoryA color={colors.RED}>A</S.CategoryA>
              <input
                ref={categoryA_input}
                value={categoryA}
                onChange={(e) => setCategoryA(e.target.value)}
              />
            </S.ABox>
            <S.BBox>
              <S.CategoryB color={colors.BLUE}>B</S.CategoryB>
              <input
                ref={categoryB_input}
                value={categoryB}
                onChange={(e) => setCategoryB(e.target.value)}
              />
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
