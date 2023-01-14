import BackButton from '../../components/Common/BackButton';
import styled from 'styled-components';

const UploadPage = () => {
  return (
    <div>
      뒤로가기
      <BackButton />
      <PostSection>
        <PostArticle>
          <box>
            토론주제
            <input />
          </box>

          <box>
            선택분류
            <div>
              A <input />
            </div>
            <div>
              B <input />
            </div>
          </box>
          <button>등록</button>
        </PostArticle>
      </PostSection>
    </div>
  );
};

export default UploadPage;

// styled component
export const PostSection = styled.section`
  width: 600px;
  height: 500px;
  background-color: #f4efec;
  /* FIXME: Beige import 했는데 왜 사용이 안 됐다고 나오지?
  이유를 알았음... react native에서는 colors로 선언한 게 문자열이고 style에
  색이 문자열로 들어가서 가능한건데 styled component에서는 색을 나타낼 때
  문자열을 안 씀..! */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 2px gray;
`;

export const PostArticle = styled.article`
  width: 80%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: inherit;
`;
