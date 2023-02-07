import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import momentsRouter from './v1/routes/momentsRoutes'
import { PORT, DB /* , APP_ORIGIN */ } from './config/config'
import dbConnect from './config/mongo'

const app = express()
app.use(cors())
app.use(express.json()) // transforma req.body en json

app.use('/api/v1/diaries', momentsRouter)

dbConnect()
  .then(() => console.log('conexion ready'))
  .catch(err => console.log(err))

// mongoose.connect(DB)
//   .then(() => {
app.listen(PORT, () => { console.log(`Server running on port http://localhost:${PORT}`) })
//   })
//   .catch(err => console.log(err))
