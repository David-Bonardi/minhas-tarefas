import CardFilter from '../../components/CardFilter'

import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Search type="text" placeholder="Buscar" />
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

export default Sidebar
