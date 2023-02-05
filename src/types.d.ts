// import { Dispatch, ReactNode, SetStateAction } from 'react';

// Post type
declare interface postJ {
  title: string | number;
  content: string | number;
  createdAt: Date;
  categoryA: string | number;
  categoryB: string | number;
  likes?: [];
  // TODO: 로그인 기능 합쳐서 수정하기
  // userId: string;
  // nickName: string;
}

declare interface isOpenPropsP {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

declare interface PropsP {
  style: ReactNode;
}
