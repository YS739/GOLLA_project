import {
  Section,
  Article,
  CardBox,
  CardTitle,
  ResultBox,
  CategoryBox,
  CategoryA,
  ContentA,
  CategoryB,
  ContentB,
  GageBar,
  CardFooterBox,
  CardIcons,
  LikesIcon,
  LikesCount,
  ViewIcon,
  ViewCount,
  PercentA,
  PercentB,
} from './style';
import { BsFillCircleFill } from 'react-icons/bs';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';

const PostsList = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Article
        onClick={() => {
          navigate(`/:id`);
          // TODO: post.id 등으로 변경하기
        }}
      >
        <CardBox>
          <CardTitle>노트북 살 건데 골라주라</CardTitle>
          {/* TODO: data 가져와서 말 줄임표 추가하기
          <div>
            {post.title.length < 20 
              ? post.title
              : post.title.slice(0, 15) + '...'}
          </div> */}
          <ResultBox>
            <CategoryBox>
              <CategoryA>
                <BsFillCircleFill color="#EC5858" />
                <ContentA>삼성 삼성 삼성 노트북</ContentA>
                {/* TODO: data 가져와서 말 줄임표 추가하기 */}
              </CategoryA>
              <CategoryB>
                <BsFillCircleFill color="#3E6D9C" />
                <ContentB>LG 그램 DFEFAGD-FD</ContentB>
                {/* TODO: data 가져와서 말 줄임표 추가하기 */}
              </CategoryB>
            </CategoryBox>
            <GageBar>
              <PercentA>40%</PercentA>
              <PercentB>60%</PercentB>
            </GageBar>
          </ResultBox>
        </CardBox>
        <CardFooterBox>
          <div>By 심바아빠</div>
          <CardIcons>
            <LikesIcon>
              <BsFillSuitHeartFill color="red" />
              <LikesCount>20</LikesCount>
            </LikesIcon>
            <ViewIcon>
              <IoEyeSharp />
              <ViewCount>100</ViewCount>
            </ViewIcon>
          </CardIcons>
        </CardFooterBox>
      </Article>
      <Article
        onClick={() => {
          navigate(`/:id`);
          // TODO: post.id 등으로 변경하기
        }}
      >
        <CardBox>
          <CardTitle>노트북 살 건데 골라주라</CardTitle>
          {/* TODO: data 가져와서 말 줄임표 추가하기
          <div>
            {post.title.length < 20 
              ? post.title
              : post.title.slice(0, 15) + '...'}
          </div> */}
          <ResultBox>
            <CategoryBox>
              <CategoryA>
                <BsFillCircleFill color="#EC5858" />
                <ContentA>삼성 삼성 삼성 노트북</ContentA>
                {/* TODO: data 가져와서 말 줄임표 추가하기 */}
              </CategoryA>
              <CategoryB>
                <BsFillCircleFill color="#3E6D9C" />
                <ContentB>LG 그램 DFEFAGD-FD</ContentB>
                {/* TODO: data 가져와서 말 줄임표 추가하기 */}
              </CategoryB>
            </CategoryBox>
            <GageBar>
              <PercentA>40%</PercentA>
              <PercentB>60%</PercentB>
            </GageBar>
          </ResultBox>
        </CardBox>
        <CardFooterBox>
          <div>By 심바아빠</div>
          <CardIcons>
            <LikesIcon>
              <BsFillSuitHeartFill color="red" />
              <LikesCount>20</LikesCount>
            </LikesIcon>
            <ViewIcon>
              <IoEyeSharp />
              <ViewCount>100</ViewCount>
            </ViewIcon>
          </CardIcons>
        </CardFooterBox>
      </Article>
      <Article
        onClick={() => {
          navigate(`/:id`);
          // TODO: post.id 등으로 변경하기
        }}
      >
        <CardBox>
          <CardTitle>노트북 살 건데 골라주라</CardTitle>
          {/* TODO: data 가져와서 말 줄임표 추가하기
          <div>
            {post.title.length < 20 
              ? post.title
              : post.title.slice(0, 15) + '...'}
          </div> */}
          <ResultBox>
            <CategoryBox>
              <CategoryA>
                <BsFillCircleFill color="#EC5858" />
                <ContentA>삼성 삼성 삼성 노트북</ContentA>
                {/* TODO: data 가져와서 말 줄임표 추가하기 */}
              </CategoryA>
              <CategoryB>
                <BsFillCircleFill color="#3E6D9C" />
                <ContentB>LG 그램 DFEFAGD-FD</ContentB>
                {/* TODO: data 가져와서 말 줄임표 추가하기 */}
              </CategoryB>
            </CategoryBox>
            <GageBar>
              <PercentA>40%</PercentA>
              <PercentB>60%</PercentB>
            </GageBar>
          </ResultBox>
        </CardBox>
        <CardFooterBox>
          <div>By 심바아빠</div>
          <CardIcons>
            <LikesIcon>
              <BsFillSuitHeartFill color="red" />
              <LikesCount>20</LikesCount>
            </LikesIcon>
            <ViewIcon>
              <IoEyeSharp />
              <ViewCount>100</ViewCount>
            </ViewIcon>
          </CardIcons>
        </CardFooterBox>
      </Article>
    </Section>
  );
};

export default PostsList;
