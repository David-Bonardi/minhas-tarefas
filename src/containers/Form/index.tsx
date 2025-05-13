import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles'
import { Options, FormTask, Option } from './styles'
import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { add } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const addTask = (event: FormEvent) => {
    event.preventDefault()
    const taskToAdd = new Task(
      title,
      priority,
      enums.Status.PENDENT,
      description,
      9
    )

    dispatch(add(taskToAdd))
    navigate('/')
  }
  return (
    <S.MainContainer>
      <S.Title>Nova Tarefa</S.Title>
      <FormTask onSubmit={addTask}>
        <S.Search
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <S.Search
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa..."
        />
        <Options>
          <p>Prioridades</p>

          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                onChange={(event) => {
                  setPriority(event.target.value as enums.Priority)
                }}
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <S.SaveButton type="submit">Cadastrar</S.SaveButton>
      </FormTask>
    </S.MainContainer>
  )
}

export default Form
