import { useRef, useState, FC, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../common/color';
import {
  Section,
  Article,
  PostForm,
  WritingBox,
  PostTitleBox,
  PostTitle,
  TitleInput,
  PostContentBox,
  PostContent,
  ContentTextarea,
  CategoryBox,
  ABox,
  CategoryA,
  BBox,
  CategoryB,
  AddBtn,
} from './style';
import { collection } from 'firebase/firestore';
import { db } from '../../common/firebase';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';

// 1. type 정의 - string | number??
// 2. input 연결
// 3. 등록 버튼 함수 만들기
// 3. firebase addDoc
// 4. useMutation 쓰기

interface postJ {
  title: string | undefined;
  content: string | undefined;
  createdAt: Date;
  categoryA: string | undefined;
  categoryB: string | undefined;
  likes?: [];
  // userId: string;
  // nickName: string;
}

type UploadPageJ = () => any;

const UploadPage: UploadPageJ = () => {
  const navigate = useNavigate();

  const ref = collection(db, 'posts');
  const mutation = useFirestoreCollectionMutation(ref);
  // const [title, setTitle] = useState<string>('');
  // const [content, setContent] = useState<string>('');
  // const [categoryA, setCategoryA] = useState<string>('');
  // const [categoryB, setCategoryB] = useState<string>('');

  const title_input = useRef<HTMLInputElement>(null);
  const content_textarea = useRef<HTMLTextAreaElement>(null);
  const categoryA_input = useRef<HTMLInputElement>(null);
  const categoryB_input = useRef<HTMLInputElement>(null);

  //  input에 입력된 값 가져오기
  // const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   if (e.target.name === 'title') {
  //     setTitle(e.target.value);
  //   }
  //   if (e.target.name === 'cA') {
  //     setCategoryA(e.target.value);
  //   }
  //   if (e.target.name === 'cB') {
  //     setCategoryB(e.target.value);
  //   }
  // };
  // // content = textarea에 입력된 값 가져오기
  // const TextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   e.preventDefault();

  //   setContent(e.target.value);
  // };

  // FIXME: form에 연결하면 type 에러
  const PostBtnHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newPost: postJ = {
      title: title_input.current?.value,
      content: content_textarea.current?.value,
      createdAt: new Date(),
      // TODO: new Date().toLocaleString("ko-KR") 로 변경?
      categoryA: categoryA_input.current?.value,
      categoryB: categoryB_input.current?.value,
      // likes: [],
      // userId: authService.currentUser.uid,
      // nickName: authService.currentUser.displayname
    };
    //
    if (title_input.current?.value.trim().length === 0) {
      alert('제목을 입력해주세요.');
      title_input.current?.focus();
    } else if (content_textarea.current?.value.trim().length === 0) {
      alert('내용을 입력해주세요.');
      content_textarea.current?.focus();
    } else if (categoryA_input.current?.value.trim().length === 0) {
      alert('A카테고리 내용을 입력해주세요.');
      categoryA_input.current.focus();
    } else if (categoryB_input.current?.value.trim().length === 0) {
      alert('B카테고리 내용을 입력해주세요.');
      categoryB_input.current.focus();
    } else {
      mutation.mutate(newPost);

      // TODO: ${post.id}로 바꾸기
      navigate(`/:id`);
      alert('등록 완료');
    }
  };

  return (
    <Section>
      <Article>
        <PostForm>
          <WritingBox>
            <PostTitleBox>
              <PostTitle>제목</PostTitle>
              <TitleInput
                ref={title_input}
                name="title"
                // value={title}
                // onChange={InputHandler}
              />
            </PostTitleBox>
            <PostContentBox>
              <PostContent>내용</PostContent>
              <ContentTextarea
                ref={content_textarea}
                name="content"
                // value={content}
                // onChange={TextareaHandler}
              />
            </PostContentBox>
          </WritingBox>
          <CategoryBox>
            <ABox>
              <CategoryA color={colors.RED}>A</CategoryA>
              <input
                ref={categoryA_input}
                name="cA"
                // value={categoryA}
                // onChange={InputHandler}
              />
            </ABox>
            <BBox>
              <CategoryB color={colors.BLUE}>B</CategoryB>
              <input
                ref={categoryB_input}
                name="cB"
                // value={categoryB}
                // onChange={InputHandler}
              />
            </BBox>
          </CategoryBox>
          <div style={{ width: '100%' }}>
            <AddBtn onClick={PostBtnHandler}>등록</AddBtn>
          </div>
        </PostForm>
      </Article>
    </Section>
  );
};

export default UploadPage;
