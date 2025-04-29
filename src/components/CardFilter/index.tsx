import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  criterion: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ label, criterion, value }: Props) => {
  const { filter: filterReducer, tasks } = useSelector(
    (state: RootReducer) => state
  )
  const dispatch = useDispatch()

  const isActiveVerify = () => {
    const sameCriterion = filterReducer.criterion === criterion
    const sameValue = filterReducer.value === value
    return sameCriterion && sameValue
  }

  const countTasks = () => {
    if (criterion === 'todas') return tasks.items.length
    if (criterion === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
    if (criterion === 'prioridade') {
      return tasks.items.filter((item) => item.priority === value).length
    }
  }

  const filter = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const active = isActiveVerify()
  const count = countTasks()
  return (
    <S.Card isActive={active} onClick={filter}>
      <S.Counter>{count}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default CardFilter
