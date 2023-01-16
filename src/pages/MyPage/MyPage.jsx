import UserProfile from '../../components/Mypage/UserProfile';
import UserLikes from '../../components/Mypage/UserLikes';
import UserPosts from '../../components/Mypage/UserPosts';
import BackButton from '../../components/Common/BackButton';
import { Section, Div, Btn } from './style';

const MyPage = () => {
  return (
    <>
      <Section>
        <BackButton />
        <UserProfile />
        <Div>
          <Btn>내가 등록한 글</Btn>
          <Btn>내가 좋아요 한 글</Btn>
        </Div>
        <UserPosts />
        <UserLikes />
      </Section>
    </>
  );
};

export default MyPage;
