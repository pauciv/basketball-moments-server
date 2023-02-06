import { Category } from './enums'

export interface Moment {
  id: number
  file: string
  ownership: string
  category: Category
}

export type NewMoment = Omit<Moment, 'id'>
