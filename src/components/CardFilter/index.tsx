import * as S from './styles'

export type Props = {
  isActive?: boolean
}

const CardFilter = (props: Props) => (
  <S.Card isActive={props.isActive}>
    <S.Counter>3</S.Counter>
    <S.Label>Pendentes</S.Label>
  </S.Card>
)

export default CardFilter
