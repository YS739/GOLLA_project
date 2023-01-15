import UserProfile from '../../components/Mypage/UserProfile';
import UserLikes from '../../components/Mypage/UserLikes';
import UserPosts from '../../components/Mypage/UserPosts';
import BackButton from '../../components/Common/BackButton';
import { Section } from './style';

const MyPage = () => {
  return (
    <>
      <Section>
        <button>뒤로가기</button>
        <BackButton />
        <UserProfile />
        <div>
          <button>내가 등록한 글</button>
          <button>내가 좋아요 한 글</button>
        </div>
        <UserPosts />
        <UserLikes />
      </Section>
    </>
  );
};

export default MyPage;
