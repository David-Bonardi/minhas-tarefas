import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'

import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'
import { Search } from '../../styles'
import * as enums from '../../utils/enums/Task'

const Sidebar = () => {
  const dispatch = useDispatch()

  const { term } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <Search
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Status.PENDENT}
            criterion="status"
            label="Pendentes"
          />
          <CardFilter
            value={enums.Status.DONE}
            criterion="status"
            label="Concluídas"
          />
          <CardFilter
            value={enums.Priority.URGENT}
            criterion="prioridade"
            label="Urgentes"
          />
          <CardFilter
            value={enums.Priority.IMPORTANT}
            criterion="prioridade"
            label="Importantes"
          />
          <CardFilter
            value={enums.Priority.NORMAL}
            criterion="prioridade"
            label="Normal"
          />
          <CardFilter criterion="todas" label="Todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
