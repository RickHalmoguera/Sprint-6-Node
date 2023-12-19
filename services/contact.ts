import commentsData from '../data/comments.json'
import { ContactInterface } from '../models/Contact'

export const fetchAllComments = (): ContactInterface[] => {
    return commentsData;
}

export const fetchCommentbyId = (id:string): ContactInterface | undefined =>{
    const comment = commentsData.find((comment: ContactInterface) => comment.id === id);
    return comment
}