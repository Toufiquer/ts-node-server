import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { createUser } from '../src/modules/app/user/user.service'
import userRouter from '../src/modules/app/user/user.route'
const app: Application = express()

// dotenv config
dotenv.config()
const port: string | number = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(cors())

const runningServer = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)

    app.get('/', (req: Request, res: Response) => {
      res.send({ message: 'Server is running' })
    })

    // Application route
    app.use('/api/v1/user', userRouter)

    app.get('/addUser', async (req: Request, res: Response) => {
      const newUser = await createUser({
        id: '089',
        role: 'admin',
        password: '1234@3',
        name: 'name',
        email: 'example@gmail.com',
        avatar: 'avatar',
        createAt: new Date().getTime(),
      })
      res.send({ result: newUser })
    })

    // eslint-disable-next-line no-console
    app.listen(port, () => console.log('Mongo db is connected'))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error: ', error)
  }
}
runningServer()
