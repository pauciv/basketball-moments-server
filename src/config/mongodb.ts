import 'dotenv/config'
import { connect, set } from 'mongoose'

set('strictQuery', false)

const dbConnect = async (): Promise<void> => {
  const DB_URI = process.env.MONGODB_URI as string
  await connect(DB_URI)
}

export default dbConnect
