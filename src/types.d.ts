// 댓글 불러올 때 interface
declare interface CommentItem {
  content: string;
  createdAt: string;
  id: string;
  isA: boolean;
  nickName: string;
  postId: string;
  userId: string;
}

// 댓글 추가할 때 interface
declare interface AddCommentItem {
  content: string;
  createdAt: string;
  isA: boolean | null;
  nickName: string;
  postId: string;
  userId: string;
}

// comment props로 받을 때 사용
declare interface CommentProps {
  comment: CommentItem;
}

// Post type
declare interface postJ {
  title: string | number;
  content: string | number;
  createdAt: Date;
  categoryA: string | number;
  categoryB: string | number;
  likes?: [];
  // FIXME: Type 수정
  userId: string | undefined;
  nickName: string | undefined | null;
}

declare interface isOpenPropsP {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

declare interface PropsP {
  style: ReactNode;
}
