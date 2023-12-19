import express, { Request, Response } from 'express'
import { RoomsInterface } from '../models/Room'
import { fetchAllRooms, fetchRoomById } from '../services/room'
export const roomsRouter = express.Router()

roomsRouter.get('/', (req: Request, res: Response) => {
    const allRooms : RoomsInterface[] =fetchAllRooms()
    res.send(allRooms)
})

roomsRouter.get('/:id', (req: Request, res: Response) => {
    const room: RoomsInterface | undefined = fetchRoomById(req.params.id);
    console.log(room)
    if (room) {
        res.json(room);
    } else {
        res.status(404).send('Room not found');
    }
});

roomsRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomsRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomsRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomsRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})