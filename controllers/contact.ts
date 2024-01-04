import express, { Request, Response } from 'express'
import commnetsData from '../data/comments.json'
import { ContactInterface } from '../models/ContactModel'
import { fetchAllComments, fetchCommentbyId } from '../services/contact'
export const contactRouter = express.Router()

contactRouter.get('/', (req: Request, res: Response) => {
    const allComments : ContactInterface[] =fetchAllComments()
    res.send(allComments)
})

contactRouter.get('/:id', (req: Request, res: Response) => {
    const comment: ContactInterface | undefined = fetchCommentbyId(req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

contactRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

contactRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

contactRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

contactRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})