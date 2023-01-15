import { Section, Post } from "./style"
import AddComment from "../../components/DetailPage/Comments/AddComment"
import GetComments from "../../components/DetailPage/Comments/GetComments";

const DetailPage = () => {
  return (
      <Section>
        <Post>본문 들어갈 자리</Post>
        <AddComment />
        <GetComments />
      </Section>
  );
};

export default DetailPage;