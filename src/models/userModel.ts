import { Schema, model } from 'mongoose'
import { User } from '../types'

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: [true, 'the username is required']
  },
  email: {
    type: String,
    required: [true, 'the email is required']
  },
  firstName: {
    type: String,
    required: [true, 'the firstName is required']
  },
  lastName: {
    type: String
  },
  avatar: {
    type: String
  },
  uploads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'moment',
      default: []
    }
  ],
  liked: [
    {
      type: Schema.Types.ObjectId,
      ref: 'moment',
      default: []
    }
  ]
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('user', userSchema)

export default UserModel
