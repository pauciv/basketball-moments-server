import express from 'express'
import cors from 'cors'
import momentsRouter from './v1/routes/momentsRoutes'
import dbConnect from './config/mongo'
import 'dotenv/config'

const PORT = process.env.PORT as string

const app = express()
app.use(cors())
app.use(express.json()) // transforma req.body en json

app.use('/api/v1/diaries', momentsRouter)

dbConnect()
  .then(() => console.log('conexion ready'))
  .catch(err => console.log(err))

app.listen(PORT, () => { console.log(`Server running on port http://localhost:${PORT}`) })
