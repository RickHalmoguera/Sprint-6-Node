import express from 'express'
import { userRouter } from './controllers/user'
import { contactRouter } from './controllers/contact'
import { bookingRouter } from './controllers/booking'
import { roomsRouter } from './controllers/room'

export const app = express()

app.use('/users',  userRouter)
app.use('/users/:id',  userRouter)

app.use('/contact',  contactRouter)
app.use('/contact/:id',  contactRouter)

app.use('/booking',  bookingRouter)
app.use('/booking/:id',  bookingRouter)

app.use('/rooms',  roomsRouter)
app.use('/rooms/:id',  roomsRouter)

