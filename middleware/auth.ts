import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || ''

export const authMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const authHeader = req.get('Authorization')
    if(!authHeader)
        return res.status(401).json({error:true, message: 'No auth header present'})
    const token = authHeader.split('Bearer ')[1]
    try{
    
        const tokenData = jwt.verify(token, JWT_SECRET)
        console.log(tokenData)
        next()
    } catch(e){
        return res.status(401).json({error:true, message: 'Not authorized'})
    }
}