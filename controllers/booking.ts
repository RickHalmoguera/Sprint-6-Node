import express, { Request, Response } from 'express'
import { fetchAllBookings, fetchBookingById } from '../services/booking'
import { BookingInterface } from '../models/Booking'
export const bookingRouter = express.Router()

bookingRouter.get('/', (req: Request, res: Response) => {
    const allBookings : BookingInterface[] =fetchAllBookings()
    res.send(allBookings)
})

bookingRouter.get('/:id', (req: Request, res: Response) => {
    const booking: BookingInterface | undefined = fetchBookingById(req.params.id);
    if (booking) {
        res.json(booking);
    } else {
        res.status(404).send('Booking not found');
    }
});

bookingRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})