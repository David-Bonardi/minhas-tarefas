import styled from 'styled-components'

type Props = {
  isActive: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.isActive ? '#1E90FF' : 'transparent')};
  background-color: ${(props) => (props.isActive ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.isActive ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
