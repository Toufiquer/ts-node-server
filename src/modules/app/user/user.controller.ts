import { IUser } from './user.interface'
import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void | IUser> => {
  try {
    const user = req.body.user as IUser
    const result = await createUser(user)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).json({
      isSuccess: false,
      message: 'Ops! Failed to create user.',
    })
  }
}
