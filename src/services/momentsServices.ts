import MomentModel from '../models/momentModel'
import { Moment } from '../types'

const getMoments = async (): Promise<any> => {
  const response = await MomentModel.find({})
  return response
}

const getMoment = async (id: string): Promise<any> => {
  const response = await MomentModel.findOne({ _id: id })
  return response
}

const createMoment = async (moment: Moment): Promise<any> => {
  const isAlreadyCreated = await MomentModel.findOne({ file: moment.file })
  if (isAlreadyCreated != null) {
    return
  }
  const response = await MomentModel.create(moment)
  return response
}

const updateMoment = async (id: string, data: Moment): Promise<any> => {
  const response = await MomentModel.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return response
}

const deleteMoment = async (id: string): Promise<any> => {
  const response = await MomentModel.remove({ _id: id })
  return response
}

export { getMoments, getMoment, createMoment, updateMoment, deleteMoment }

// import { Moment/* , NewMoment */ } from '../types'
// // TODO: momentsData from MongoDB

// const moments: Moment[] = momentsData as Moment[]

// export const getAllMoments = (): Moment[] => moments

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
