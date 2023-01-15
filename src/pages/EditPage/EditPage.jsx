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
  ContentInput,
  CategoryBox,
  ABox,
  CategoryA,
  BBox,
  CategoryB,
  AddBtn,
} from '../UploadPage/style';

const EditPage = () => {
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
              <ContentInput />
            </PostContentBox>
          </WritingBox>
          <CategoryBox>
            <ABox>
              <CategoryA color={'#EC5858'}>A</CategoryA>
              <input />
            </ABox>
            <BBox>
              <CategoryB color={'#3E6D9C'}>B</CategoryB>
              <input />
            </BBox>
          </CategoryBox>
          <div style={{ width: '100%' }}>
            <AddBtn>수정</AddBtn>
          </div>
        </PostForm>
      </Article>
    </Section>
  );
};

export default EditPage;
