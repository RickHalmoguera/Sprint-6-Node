import express, { Request, Response } from 'express'
import commnetsData from '../data/comments.json'
import { ContactInterface } from '../models/Contact'
export const contactRouter = express.Router()

contactRouter.get('/', (req: Request, res: Response) => {
    res.send(commnetsData)
})

contactRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    id= id.replace(/:/g, '');
    const comment = commnetsData.find((comment: ContactInterface) => comment.id === id);
    console.log(id)
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