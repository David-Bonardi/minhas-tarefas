import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Circle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  transition: all ease 0.5s;

  &:hover {
    background-color: rgb(95, 197, 79);
    transition: all ease 0.5s;
  }
`

export default Circle
