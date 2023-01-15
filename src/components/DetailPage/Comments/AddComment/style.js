import styled from "styled-components";

export const Article = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px 0;
  box-sizing: border-box;
`

export const CategoryBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Category = styled.div`
    padding: 15px;
    background-color: ${(props) => props.color};
    border-radius: 5px;
    margin-bottom: 7px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    label {
        margin-left: 5px;
    }
`

export const AddCommentBox = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const CommentInput = styled.input`
    padding: 8px 10px 5px 10px;
    width: 80%;
    height: 30px;
    font-size: 16px;
`

export const AddBtn = styled.button`
    width: 15%;
    height: 45px;
    background-color: black;
    color: white;
    font-size: 14px;
    border: transparent;
    border-radius: 10px;
    cursor: pointer;
`
