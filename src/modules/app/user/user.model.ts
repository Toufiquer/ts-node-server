import { Model, Schema, model } from 'mongoose'

import { IUser } from './user.interface'

// type UserModel = Model<IUser, {}, IUserMethods>
type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  password: { type: String, required: true, unique: false },
  createAt: { type: Number, required: true, unique: true },
})

export const User = model<IUser, UserModel>('User', userSchema)
