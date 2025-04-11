import CardFilter from '../../components/CardFilter'

import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Search type="text" placeholder="Buscar" />
      <S.Filters>
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter isActive />
      </S.Filters>
    </div>
  </S.Aside>
)

export default Sidebar
