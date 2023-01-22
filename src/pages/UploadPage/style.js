import styled from 'styled-components';
import { colors } from '../../common/color';

export const Section = styled.div`
  width: 85%;
  max-width: 900px;
  justify-content: center;
  align-items: center;
`;

export const Article = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${colors.beige};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
`;

export const PostForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: inherit;
`;

// 제목, 내용 Box
export const WritingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

// Title
export const PostTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const PostTitle = styled.div`
  color: black;
  width: 80px;
  height: 40px;
  font-weight: bold;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 4px;
  padding-bottom: 1px;

  margin-right: 10px;
  text-align: center;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 45px;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px;
  padding-left: 10px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

// Content
export const PostContentBox = styled(PostTitleBox)`
  align-items: flex-start;
`;

export const PostContent = styled(PostTitle)``;

export const ContentTextarea = styled.textarea`
  width: 500px;
  height: 130px;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  word-break: break-all;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px;
  padding-left: 10px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

// 선택분류 A,B
export const CategoryBox = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 500px;
    height: 45px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px;
    padding-left: 10px;
    box-sizing: border-box;

    :focus {
      outline: none;
    }
  }
`;

export const ABox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 15px;
  background-color: #495057;
  color: white;

  font-size: 16px;
  font-weight: bold;
  margin-right: 0;

  cursor: pointer;

  :hover {
    background-color: ${colors.grey};
    color: black;
    transition: 1s;
  }
`;
