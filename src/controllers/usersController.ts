import { Request, Response } from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../services/usersServices'
import { handleError } from '../utils/errorHandle'

const getAllUsers = async (_req: Request, res: Response): Promise<any> => {
  try {
    const allUsers = await getUsers()
    res.send(allUsers)
  } catch (err) {
    handleError(res, 'getAllUsers error')
  }
}

const getOneUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const oneUser = await getUser(req.params.userId)
    res.send(oneUser)
  } catch (err) {
    handleError(res, 'getOneUser error')
  }
}

const createNewUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const newUser = await createUser(req.body)
    res.send(newUser)
  } catch (err) {
    handleError(res, 'createNewUser error')
  }
}

const updateOneUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { params: { userId }, body } = req
    const response = await updateUser(userId, body)
    res.send(response)
  } catch (err) {
    handleError(res, 'updateOneUser error')
  }
}

const deleteOneUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await deleteUser(req.params.userId)
    res.send(response)
  } catch (err) {
    handleError(res, 'deleteOneUser error')
  }
}

export { getAllUsers, getOneUser, createNewUser, updateOneUser, deleteOneUser }
