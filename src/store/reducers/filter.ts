import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type StateFilter = {
  term: string
  criterion: 'priority' | 'status' | 'all'
  valor?: enums.Priority | enums.Status
}

const initialState: StateFilter = {
  term: '',
  criterion: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions
export default filterSlice.reducer
