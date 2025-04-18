import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      description: 'Ver a aula 9',
      priority: enums.Priority.URGENT,
      status: enums.Status.DONE,
      title: 'Estudar React'
    },
    {
      id: 2,
      description: 'Ver a aula 5',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDENT,
      title: 'Estudar TypeScript'
    },
    {
      id: 3,
      description: 'Ver a aula 3',
      priority: enums.Priority.NORMAL,
      status: enums.Status.DONE,
      title: 'Estudar HTML'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((items) => items.id !== action.payload)
      console.log(state.items)
    }
  }
})

export const { remover } = tasksSlice.actions

export default tasksSlice.reducer
