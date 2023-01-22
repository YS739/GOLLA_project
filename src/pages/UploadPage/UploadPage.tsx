import { useRef, useState } from 'react';
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

// 1. type 정의 - string | number??
// 2. input 연결
// 3. 등록 버튼 함수 만들기
// 3. firebase addDoc + useMutation

const UploadPage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [categoryA, setCategoryA] = useState<string>('');
  const [categoryB, setCategoryB] = useState<string>('');

  const title_input = useRef<HTMLInputElement>(null);
  const content_textarea = useRef<HTMLTextAreaElement>(null);
  const categoryA_input = useRef<HTMLInputElement>(null);
  const categoryB_input = useRef<HTMLInputElement>(null);

  //TODO: onChangeHandler 만들기

  // TODO: 등록 버튼 연결 함수 만들기

  return (
    <Section>
      <Article>
        <PostForm>
          <WritingBox>
            <PostTitleBox>
              <PostTitle>제목</PostTitle>
              <TitleInput
                ref={title_input}
                // value={title}
                placeholder="제목을 입력해주세요."
              />
            </PostTitleBox>
            <PostContentBox>
              <PostContent>내용</PostContent>
              <ContentTextarea
                ref={content_textarea}
                value={content}
                placeholder="내용을 입력해주세요."
              />
            </PostContentBox>
          </WritingBox>
          <CategoryBox>
            <ABox>
              <CategoryA color={colors.RED}>A</CategoryA>
              <input />
            </ABox>
            <BBox>
              <CategoryB color={colors.BLUE}>B</CategoryB>
              <input />
            </BBox>
          </CategoryBox>
          <div style={{ width: '100%' }}>
            <AddBtn>등록</AddBtn>
          </div>
        </PostForm>
      </Article>
    </Section>
  );
};

export default UploadPage;
