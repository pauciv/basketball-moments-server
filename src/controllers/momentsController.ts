import { Request, Response } from 'express'
import { handleHttp } from '../utils/errorHandle'

const getAllMoments = (_req: Request, res: Response): any => {
  try {
    return res.send({ data: 'all moments' })
  } catch (err) {
    handleHttp(res, 'getAllMoments error')
  }
}

const getOneMoment = (_req: Request, res: Response): any => {
  try {
    return res.send({ data: 'one moment' })
  } catch (err) {
    handleHttp(res, 'getOneMoment error')
  }
}

const createNewMoment = (req: Request, res: Response): any => {
  try {
    res.send(req.body)
  } catch (err) {
    handleHttp(res, 'createNewMoment error')
  }
}

export { getAllMoments, getOneMoment, createNewMoment }
