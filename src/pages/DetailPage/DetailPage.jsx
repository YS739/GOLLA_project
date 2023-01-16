import { Section, Post, PostEditDeleteBox, Btn, PrevNextPost, BtnBox, PrevNextBtn } from "./style"
import AddComment from "../../components/DetailPage/Comments/AddComment"
import GetComments from "../../components/DetailPage/Comments/GetComments";
import { FcPrevious, FcNext } from "react-icons/fc";

const DetailPage = () => {
  return (
      <Section>
        {/* TODO: 컴포넌트 분리 */}
        <PostEditDeleteBox>
          <Btn>수정</Btn>
          <Btn>삭제</Btn>
        </PostEditDeleteBox>
        <Post>본문 들어갈 자리</Post>
        <PrevNextPost>
          <BtnBox>
            <FcPrevious style={{color: "black"}} />
            <PrevNextBtn>이전 글</PrevNextBtn>
          </BtnBox>
          <BtnBox>
            <PrevNextBtn>다음 글</PrevNextBtn>
            <FcNext />
          </BtnBox>
        </PrevNextPost>
        <AddComment />
        <GetComments />
      </Section>
  );
};

export default DetailPage;