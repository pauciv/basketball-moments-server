import { Request, Response } from 'express'
import { getMoments, getMoment, createMoment, updateMoment, deleteMoment } from '../services/momentsServices'
import { handleHttp } from '../utils/errorHandle'

const getAllMoments = async (_req: Request, res: Response): Promise<any> => {
  try {
    const allMoments = await getMoments()
    res.send(allMoments)
  } catch (err) {
    handleHttp(res, 'getAllMoments error', err)
  }
}

const getOneMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const oneMoment = await getMoment(req.params.momentId)
    res.send(oneMoment)
  } catch (err) {
    handleHttp(res, 'getOneMoment error', err)
  }
}

const createNewMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const newMoment = await createMoment(req.body)
    res.send(newMoment)
  } catch (err) {
    handleHttp(res, 'createNewMoment error', err)
  }
}

const updateOneMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const { params: { momentId }, body } = req
    const response = await updateMoment(momentId, body)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'updateOneMoment error', err)
  }
}

const deleteOneMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await deleteMoment(req.params.momentId)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'deleteOneMoment error', err)
  }
}

export { getAllMoments, getOneMoment, createNewMoment, updateOneMoment, deleteOneMoment }
