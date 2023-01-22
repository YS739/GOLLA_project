import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
`;

export const Article = styled.div`
  width: 400px;
  height: 250px;
  margin: 0 10px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const CardBox = styled.div`
  width: 100%;
  height: 85%;
  background-color: #f4efec;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-items: inherit;
`;

export const CardTitle = styled.div`
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 30px;
  text-align: center;
`;

// white box - Category, GageBar
export const ResultBox = styled.div`
  width: 90%;
  height: 45%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: -25px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
`;

// Category
export const CategoryBox = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-top: 5px;
`;

export const CategoryA = styled.div`
  display: flex;
`;
export const ContentA = styled.div`
  margin-left: 5px;
`;

export const CategoryB = styled(CategoryA)``;
export const ContentB = styled(ContentA)``;

// GageBar
export const GageBar = styled.div`
  width: 80%;
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const PercentA = styled.div`
  width: 40%;
  height: 100%;
  background-color: #ec5858;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
`;

export const PercentB = styled(PercentA)`
  width: 60%;
  background-color: #3e6d9c;
`;

// Card Bottom box(user, icons)
export const CardFooterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

// Icons
export const CardIcons = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LikesIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikesCount = styled.div`
  margin-left: 5px;
`;

export const ViewIcon = styled(LikesIcon)``;

export const ViewCount = styled(LikesCount)``;
