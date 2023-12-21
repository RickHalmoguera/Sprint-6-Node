import express from 'express'
import { userRouter } from './controllers/user'
import { contactRouter } from './controllers/contact'
import { bookingRouter } from './controllers/booking'
import { roomsRouter } from './controllers/room'
import { authMiddleware } from './middleware/auth'
import { loginRouter } from './controllers/login'

require('dotenv').config()

export const app = express()
app.use(express.json())


app.use('/login', loginRouter)

app.use(authMiddleware)


app.use('/user', userRouter)
app.use('/user/:id', userRouter)

app.use('/contact', contactRouter)
app.use('/contact/:id', contactRouter)

app.use('/booking', bookingRouter)
app.use('/booking/:id', bookingRouter)

app.use('/room', roomsRouter)
app.use('/room/:id', roomsRouter)

export default app;
