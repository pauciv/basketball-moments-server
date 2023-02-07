import { Category } from './enums'

export interface Moment {
  file: string
  ownership: string
  description: string
  category: Category
}

export type NewMoment = Omit<Moment, 'id'>
