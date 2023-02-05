import {
  Section,
  Post,
  PostEditDeleteBox,
  Btn,
  PrevNextPost,
  BtnBox,
  PrevNextBtn,
} from './style';
import AddComment from '../../components/DetailPage/Comments/AddComment';
import GetComments from '../../components/DetailPage/Comments/GetComments';
import { FcPrevious, FcNext } from 'react-icons/fc';
import GageBar from '../../components/DetailPage/GageBar';
import { useQuery } from 'react-query';
import { getCommnets } from '../../common/api';

const DetailPage = () => {
  const { data: comments, isLoading } = useQuery('comments', getCommnets);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  // FIXME: GareBar, GetComments에 props 넘길 때 타입 지정 any 말고 수정하기
  return (
    <Section>
      {/* TODO: 본문 수정/삭제, 이전 글/다음 글 컴포넌트 분리 */}
      <PostEditDeleteBox>
        <Btn>수정</Btn>
        <Btn>삭제</Btn>
      </PostEditDeleteBox>
      <Post>본문 들어갈 자리</Post>
      <GageBar comments={comments} />
      <PrevNextPost>
        <BtnBox>
          <FcPrevious />
          <PrevNextBtn>이전 글</PrevNextBtn>
        </BtnBox>
        <BtnBox>
          <PrevNextBtn>다음 글</PrevNextBtn>
          <FcNext />
        </BtnBox>
      </PrevNextPost>
      <AddComment />
      <GetComments comments={comments} />
    </Section>
  );
};

export default DetailPage;
