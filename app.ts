import express from 'express'
import { usersRouter } from './controllers/user'
import { authMiddleware } from './middleware/auth'
import { loginRouter } from './controllers/login'
import { bookingRouter } from './controllers/bookings'
import { roomRouter } from './controllers/rooms'
import { contactRouter } from './controllers/contact'
import { connectToDb } from './connectToDb'


require('dotenv').config()

export const app = express()

app.use(express.json())

app.use('/login', loginRouter)

app.use(authMiddleware)
connectToDb()
app.use('/users', usersRouter)
app.use('/bookings', bookingRouter)
app.use('/rooms', roomRouter)
app.use('/contact', contactRouter)
app.use('/users', usersRouter)

export default app;
