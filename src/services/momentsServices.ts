import { Moment/* , NewMoment */ } from '../types'
// TODO: momentsData from MongoDB

const moments: Moment[] = momentsData as Moment[]

export const getAllMoments = (): Moment[] => moments

// export const getOneMoment = (id: number): Moment | undefined => {
//   const entry = diaries.find(d => d.id === id)
//   return entry
// }

// export const createNewMoment = (newMoment: NewMoment): Moment => {
//   const newEntry = {
//     id: Math.max(...diaries.map(d => d.id)) + 1,
//     ...newDiaryEntry
//   }

//   diaries.push(newEntry)
//   return newEntry
// }
