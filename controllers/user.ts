import express, { Request, Response } from 'express'
import {userData} from '../data/users'
import { UserInterface } from '../models/User'
export const userRouter = express.Router()

userRouter.get('/', (req: Request, res: Response) => {
    res.send(userData)
})

userRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    id = id.replace(/[^0-9]/g, '');
    const parsedId: number = parseInt(id);
    const user = userData.find((user: UserInterface) => user.id === parsedId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

userRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

userRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

userRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

userRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})