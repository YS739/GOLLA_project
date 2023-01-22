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

const UploadPage = () => {
  return (
    <Section>
      <Article>
        <PostForm>
          <WritingBox>
            <PostTitleBox>
              <PostTitle>제목</PostTitle>
              <TitleInput />
            </PostTitleBox>
            <PostContentBox>
              <PostContent>내용</PostContent>
              <ContentTextarea />
            </PostContentBox>
          </WritingBox>
          <CategoryBox>
            <ABox>
              <CategoryA color={colors.red}>A</CategoryA>
              <input />
            </ABox>
            <BBox>
              <CategoryB color={colors.blue}>B</CategoryB>
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
