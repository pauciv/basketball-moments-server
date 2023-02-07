import { Schema, Types, model, Model } from 'mongoose'
import { Category } from '../enums'
import { Moment } from '../types'

const momentSchema = new Schema<Moment>({
  file: {
    type: String,
    required: [true, 'the file is required']
  },
  ownership: {
    type: String

  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: Category,
    required: [true, 'the Category is required']
  }
}, {
  timestamps: true,
  versionKey: false
})

const momentModel = model('moment', momentSchema)

export default momentModel
