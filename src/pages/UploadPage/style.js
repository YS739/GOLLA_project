import styled from 'styled-components';

export const Section = styled.div`
  width: 85%;
  max-width: 900px;
  justify-content: center;
  align-items: center;
`;

export const Article = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f4efec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
`;

export const PostForm = styled.form`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: inherit;
`;

// 제목, 내용 Box
export const WritingBox = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

// Title
export const PostTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PostTitle = styled.div`
  margin-right: 10px;
  font-size: 24px;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 15px;
  border: none;
  font-size: 16px;

  :focus-visible {
    border: none;
  }
`;

// Content
export const PostContentBox = styled(PostTitleBox)``;

export const PostContent = styled(PostTitle)``;

export const ContentInput = styled(TitleInput)`
  height: 150px;
  display: flex;
  align-items: top;
  white-space: pre-line;
  /* TODO: 첫번째 줄에 써지게 하기 + 자동 줄바꿈 */
`;

// 선택분류 A,B
export const CategoryBox = styled.div`
  width: 90%;
  height: 35%;
  margin-top: 10px;
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 400px;
    height: 45px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
  }
`;

export const ABox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryA = styled.div`
  color: white;
  width: 80px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 4px;
  padding-bottom: 1px;

  margin-right: 10px;
  text-align: center;
`;

export const BBox = styled(ABox)``;

export const CategoryB = styled(CategoryA)``;

// 등록 버튼
export const AddBtn = styled.button`
  float: right;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 15px;
  background-color: #f6f6f6;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
    transition: 1s;
  }
`;
