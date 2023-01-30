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
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../common/firebase';

// 1. type 정의 - string | number??
// 2. input 연결
// 3. 등록 버튼 함수 만들기
// 3. firebase addDoc
// 4. useMutation 쓰기

interface postJ {
  title: string | number;
  content: string | number;
  createdAt: Date;
  categoryA: string | number;
  categoryB: string | number;
  // likes: [],
  // userId: string;
  // nickName: string;
}

type UploadPageJ = () => any;

const UploadPage: UploadPageJ = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [categoryA, setCategoryA] = useState<string>('');
  const [categoryB, setCategoryB] = useState<string>('');

  const title_input = useRef<HTMLInputElement>(null);
  const content_textarea = useRef<HTMLTextAreaElement>(null);
  const categoryA_input = useRef<HTMLInputElement>(null);
  const categoryB_input = useRef<HTMLInputElement>(null);

  //  input에 입력된 값 가져오기
  const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    }
    if (e.target.name === 'cA') {
      setCategoryA(e.target.value);
    }
    if (e.target.name === 'cB') {
      setCategoryB(e.target.value);
    }
  };
  // content = textarea에 입력된 값 가져오기
  const TextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setContent(e.target.value);
  };

  // 등록 버튼 -TODO: 유효성 검사 및 focus 추가하기 - 공백 금지
  // FIXME: form에 연결하면 type 에러
  const PostBtnHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newPost: postJ = {
      title,
      content,
      createdAt: new Date(),
      // TODO: new Date().toLocaleString("ko-KR") 로 변경?
      categoryA,
      categoryB,
      // likes: [],
      // userId: authService.currentUser.uid,
      // nickName: authService.currentUser.displayname
    };
    await addDoc(collection(db, 'posts'), newPost);

    setTitle('');
    setContent('');
    setCategoryA('');
    setCategoryB('');
    // TODO: ${post.id}로 바꾸기
    navigate(`/:id`);
    alert('등록 완료');
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
                value={title}
                onChange={InputHandler}
              />
            </PostTitleBox>
            <PostContentBox>
              <PostContent>내용</PostContent>
              <ContentTextarea
                ref={content_textarea}
                name="content"
                value={content}
                onChange={TextareaHandler}
              />
            </PostContentBox>
          </WritingBox>
          <CategoryBox>
            <ABox>
              <CategoryA color={colors.RED}>A</CategoryA>
              <input
                ref={categoryA_input}
                name="cA"
                value={categoryA}
                onChange={InputHandler}
              />
            </ABox>
            <BBox>
              <CategoryB color={colors.BLUE}>B</CategoryB>
              <input
                ref={categoryB_input}
                name="cB"
                value={categoryB}
                onChange={InputHandler}
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
