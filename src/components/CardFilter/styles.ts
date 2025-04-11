import styled from 'styled-components'

import { Props } from '.'

type PropsNoCounterAndLabel = Omit<Props, 'counter' | 'label'>

export const Card = styled.div<PropsNoCounterAndLabel>`
  padding: 8px;
  border: 1px solid ${(props) => (props.isActive ? '#1E90FF' : 'none')};
  background-color: ${(props) => (props.isActive ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.isActive ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
