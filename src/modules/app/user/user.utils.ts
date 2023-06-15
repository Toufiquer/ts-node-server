import { IUser } from './user.interface'
import { User } from './user.model'

export const getNextId = (arr: IUser[]): string => {
  const biggestId = arr.reduce(
    (prev, current) =>
      parseInt(prev.id) > parseInt(current.id) ? prev : current,
    arr[0]
  )
  biggestId.id = (parseInt(biggestId.id) + 1).toString()
  return biggestId.id.padStart(5, '0')
}

// if you know you got last user and sort by last createAt by mongoDb
export const getUserId = (id: string): string => {
  const newId = (parseInt(id) + 1).toString()
  return newId.padStart(5, '0')
}

// find last user
export const findLastUserId = async (): Promise<string | undefined> => {
  // by sorting it will find last user which is save on db
  //   lean for fastest query on mongoDB
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createAt: -1,
    })
    .lean()
  return lastUser?.id
}
