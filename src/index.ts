import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app: Application = express()

const port: string | number = process.env.PORT || 5000

// dotenv config
dotenv.config()

// middleware
app.use(express.json())
app.use(cors())

const runningServer = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)

    app.get('/', (req: Request, res: Response) => {
      res.send({ message: 'Server is running' })
    })

    app.listen(port, () => console.log('Mongo db is connected'))
  } catch (error) {
    console.log('error: ', error)
  }
}
runningServer()
