// import * as dotenv from 'dotenv'
// dotenv.config()

import 'dotenv/config'

// DB connection
export const PORT = process.env.PORT
// export const DB = process.env.MONGO_URI
export const DB = process.env.MONGODB_URI

// Client
export const APP_ORIGIN = process.env.APP_ORIGIN
