import UserModel from '../models/userModel'
import { User } from '../types'

const getUsers = async (): Promise<any> => {
  const response = await UserModel.find({})
  return response
}

const getUser = async (id: string): Promise<any> => {
  const response = await UserModel.findOne({ _id: id })
  return response
}

const createUser = async (user: User): Promise<any> => {
  const response = await UserModel.create(user)
  return response
}

const updateUser = async (id: string, data: User): Promise<any> => {
  const response = await UserModel.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return response
}

const deleteUser = async (id: string): Promise<any> => {
  const response = await UserModel.remove({ _id: id })
  return response
}

export { getUsers, getUser, createUser, updateUser, deleteUser }
