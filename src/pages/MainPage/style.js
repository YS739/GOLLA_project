import styled from 'styled-components';

export const Section = styled.div`
  width: 85%;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
`;

export const MainNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 10px;
`;
export const Categories = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;

export const NewCategory = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  color: gray;
  //TODO: 클릭했을 때 black or gray
  :hover,
  :active,
  :focus {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

export const NewPostsBtn = styled.div`
  font-weight: bold;
`;
export const PopularCategory = styled(NewCategory)``;

export const PopularPostsBtn = styled(NewPostsBtn)``;
