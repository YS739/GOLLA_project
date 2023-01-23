import styled from "styled-components";

export const CommentBox = styled.div`
    padding: 10px 30px 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    position: relative;
    border-bottom: 1px solid gray;
`

export const ToggleBtn = styled.div`
    cursor: pointer;
    padding: 10px;
    position: absolute;
    right: -10px;
    top: 5px;
`

export const IconBox = styled.div`
    height: 36px;
    width: 36px;
    margin-right: 10px;
`

export const CateIcon = styled.div`
    border-radius: 40px;
    background-color: ${(props) => props.color};
    color: white;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    p {
        padding-top: 2px;
        padding-left: 1px;
    }
`
export const CommentDatail = styled.div`

`

export const NameDateBox = styled.div`
    margin-bottom: 5px;
`

export const Name = styled.span`
    font-size: 15px;
`

export const Date = styled.span`
    font-size: 15px;
`

export const Content = styled.span`
    font-size: 17px;
`