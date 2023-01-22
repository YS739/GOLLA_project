import PostsList from '../../components/PostsList/PostsList';
import { BsFillClockFill } from 'react-icons/bs';
import { BsGraphUp } from 'react-icons/bs';
import {
  Section,
  MainNav,
  Categories,
  NewCategory,
  NewPostsBtn,
  PopularCategory,
  PopularPostsBtn,
} from './style';
import React from 'react';

const MainPage = () => {
  // TODO:
  return (
    <Section>
      <MainNav>
        <Categories>
          <NewCategory>
            <BsFillClockFill />
            <NewPostsBtn>최신순</NewPostsBtn>
          </NewCategory>
          <PopularCategory>
            <BsGraphUp />
            <PopularPostsBtn>인기순</PopularPostsBtn>
          </PopularCategory>
        </Categories>
      </MainNav>
      <PostsList />
    </Section>
  );
};

export default MainPage;
