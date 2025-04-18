import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ title, priority, status, description, id }: Props) => {
  const [isEditiding, setIsEdititing] = useState(false)

  const dispatch = useDispatch()

  return (
    <S.Card>
      {isEditiding ? (
        <S.Title>{'Editando: ' + title}</S.Title>
      ) : (
        <>
          <S.Title>{title}</S.Title>
        </>
      )}

      <S.Tag priority={priority} parametro="priority">
        {priority}
      </S.Tag>
      <S.Tag status={status} parametro="status">
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditiding ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelRemoveButton onClick={() => setIsEdititing(false)}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEdititing(true)}>Editar</S.Button>
            <S.CancelRemoveButton onClick={() => dispatch(remover(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
