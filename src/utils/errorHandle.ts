import { Response } from 'express'

const handleError = (res: Response, error: string): any => {
  res
    .status(500)
    .send({ error })
}

export { handleError }
