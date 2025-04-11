import * as S from './styles'

export type Props = {
  isActive?: boolean
  counter: number
  label: string
}

const CardFilter = ({ isActive, counter, label }: Props) => (
  <S.Card isActive={isActive}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{label}</S.Label>
  </S.Card>
)

export default CardFilter
