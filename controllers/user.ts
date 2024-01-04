import express, { Request, Response } from 'express'
import { fetchAllUsers, fetchUserById } from '../services/user';
import { UserInterface } from '../models/UserModel'
export const userRouter = express.Router()

userRouter.get('/', (req: Request, res: Response) => {
    const allUsers: UserInterface[] = fetchAllUsers();
    res.json(allUsers)
})

userRouter.get('/:id', (req: Request, res: Response) => {
    const user: UserInterface | undefined = fetchUserById(req.params.id);
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