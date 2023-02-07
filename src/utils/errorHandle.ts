import { Response } from 'express'

const handleHttp = (res: Response, error: string): any => {
  res
    .status(500)
    .send({ error })
}

export { handleHttp }
