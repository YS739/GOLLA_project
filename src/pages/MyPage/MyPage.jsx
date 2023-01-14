import UserProfile from "../../components/Mypage/UserProfile";
import UserLikes from "../../components/Mypage/UserLikes";
import UserPosts from "../../components/Mypage/UserPosts";
import BackButton from "../../components/Common/BackButton";

const MyPage = () => {
  return (
    <>
      <BackButton />
      <UserProfile />
      <UserPosts />
      <UserLikes />
    </>
  );
};

export default MyPage;
