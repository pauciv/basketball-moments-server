import express from 'express'
import momentsRouter from './v1/routes/momentsRoutes'

const app = express()
app.use(express.json()) // transforma req.body en json

const PORT = 4000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use('/api/v1/diaries', momentsRouter)


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
