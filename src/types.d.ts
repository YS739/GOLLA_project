// Post type
declare interface postJ {
  title: string | number;
  content: string | number;
  createdAt: Date;
  categoryA: string | number;
  categoryB: string | number;
  likes?: [];
  // userId: string;
  // nickName: string;
}
