// here only business logic
// what to do with db collection not req and res
//  req and res in controller

import { IUser } from './user.interface'
import { User } from './user.model'
import { findLastUserId, getUserId } from './user.utils'

// create a user
export const createUser = async (user: IUser): Promise<IUser | null> => {
  // find last User
  const lastId: string | undefined = await findLastUserId()
  if (!lastId) {
    user.id = '00001'
  } else {
    user.id = getUserId(lastId)
  }

  if (!user.password) {
    user.password = process.env.GENERATED_USER_PASSWORD as string
  }
  user.createAt = new Date().getTime()
  const createUser: IUser = await User.create(user)
  if (!createUser) {
    throw new Error('Ops! Failed to crete user!')
  }
  return createUser
}
