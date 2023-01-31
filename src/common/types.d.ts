import { Dispatch, ReactNode, SetStateAction } from 'react';

declare interface isOpenPropsP {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

declare interface PropsP {
  style: ReactNode;
}
