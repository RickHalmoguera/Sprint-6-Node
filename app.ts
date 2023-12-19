import express from 'express'
import { userRouter } from './controllers/user'

export const app = express()

app.use('/users',  userRouter)
app.use('/users/:id',  userRouter)


