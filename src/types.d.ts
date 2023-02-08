import { Category } from './enums'

export interface Moment {
  file: string
  ownership: string
  description: string
  category: Category
}

export interface User {
  username: string
  email: string
  firstName: string
  lastName: string
  avatar: string
  uploads: array
  liked: array
}
