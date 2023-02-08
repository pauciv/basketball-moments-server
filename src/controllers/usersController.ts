import { Request, Response } from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../services/usersServices'
import { handleHttp } from '../utils/errorHandle'

const getAllUsers = async (_req: Request, res: Response): Promise<any> => {
  try {
    const allUsers = await getUsers()
    res.send(allUsers)
  } catch (err) {
    handleHttp(res, 'getAllUsers error', err)
  }
}

const getOneUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const oneUser = await getUser(req.params.userId)
    res.send(oneUser)
  } catch (err) {
    handleHttp(res, 'getOneUser error', err)
  }
}

const createNewUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const newUser = await createUser(req.body)
    res.send(newUser)
  } catch (err) {
    handleHttp(res, 'createNewUser error', err)
  }
}

const updateOneUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { params: { userId }, body } = req
    const response = await updateUser(userId, body)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'updateOneUser error', err)
  }
}

const deleteOneUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await deleteUser(req.params.userId)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'deleteOneUser error', err)
  }
}

export { getAllUsers, getOneUser, createNewUser, updateOneUser, deleteOneUser }
