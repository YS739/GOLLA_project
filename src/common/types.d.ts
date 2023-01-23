declare interface CommentItem {
    content: string,
    createdAt: string,
    id: string,
    isA: boolean,
    nickName: string,
    postId: string,
    userId: string
}

declare interface AddCommentItem {
    content: string,
    createdAt: string,
    isA: boolean | null,
    nickName: string,
    postId: string,
    userId: string
}