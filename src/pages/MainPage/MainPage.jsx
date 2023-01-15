import PostsList from '../../components/PostsList/PostsList';
import styled from 'styled-components';
import { BsFillClockFill } from 'react-icons/bs';
import { BsGraphUp } from 'react-icons/bs';

const MainPage = () => {
  return (
    <Section>
      <MainNav>
        <Categories>
          <div>
            <BsFillClockFill />
            최신순
          </div>
          <div>
            <BsGraphUp />
            인기순
          </div>
        </Categories>
      </MainNav>
      <PostsList />
    </Section>
  );
};

export default MainPage;

// styled component
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
  width: 150px;
  display: flex;
  justify-content: space-around;
`;
