import express from 'express'
import { userRouter } from './controllers/user'
import { contactRouter } from './controllers/contact'

export const app = express()

app.use('/users',  userRouter)
app.use('/users/:id',  userRouter)

app.use('/contact',  contactRouter)
app.use('/contact/:id',  contactRouter)

