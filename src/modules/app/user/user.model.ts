import { Model, Schema, model } from 'mongoose'

import { IUser } from './user.interface'

// type UserModel = Model<IUser, {}, IUserMethods>
type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
})

export const User = model<IUser, UserModel>('User', userSchema)
