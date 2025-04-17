import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar JS',
      enums.Priority.IMPORTANT,
      enums.Status.PENDENT,
      'Ver a aula 4',
      1
    ),
    new Task(
      'Estudar React',
      enums.Priority.URGENT,
      enums.Status.DONE,
      'Ver a aula 7',
      2
    ),
    new Task(
      'Estudar TypeScript',
      enums.Priority.URGENT,
      enums.Status.PENDENT,
      'Ver a aula 9',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remover } = tasksSlice.actions

export default tasksSlice.reducer
