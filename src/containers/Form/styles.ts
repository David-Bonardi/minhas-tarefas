import styled from 'styled-components'

export const FormTask = styled.form`
  max-width: 547px;
  width: 100%;
  color: #666666;
  font-weight: bold;
  font-size: 14px;

  textarea {
    resize: none;
    border: solid 1px #eee;
    margin: 16px 0;
  }
`
export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }

  input {
    margin-right: 3px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
