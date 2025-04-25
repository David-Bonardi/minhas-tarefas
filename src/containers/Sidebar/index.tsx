import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'

import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const Sidebar = () => {
  const dispatch = useDispatch()

  const { term } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <S.Search
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter label="Pendentes" counter={3} />
          <CardFilter label="Concluídas" counter={4} />
          <CardFilter label="Urgentes" counter={2} />
          <CardFilter label="Importantes" counter={2} />
          <CardFilter label="Normal" counter={3} />
          <CardFilter label="Todas" counter={7} isActive />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
