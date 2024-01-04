import express from 'express'
import { usersRouter } from './controllers/user'
import { authMiddleware } from './middleware/auth'
import { loginRouter } from './controllers/login'


require('dotenv').config()

export const app = express()


app.use(express.json())

app.use('/login', loginRouter)

app.use(authMiddleware)

app.use('/users', usersRouter)

export default app;
