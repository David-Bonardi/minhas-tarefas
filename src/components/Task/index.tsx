import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: Props) => {
  const [isEditiding, setIsEdititing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  const dispatch = useDispatch()

  function cancelEdititing() {
    setIsEdititing(false)
    setDescription(originalDescription)
  }

  function saveEdititing() {
    setIsEdititing(false)
    dispatch(
      edit({
        description,
        priority,
        status,
        title,
        id
      })
    )
  }

  return (
    <S.Card>
      {isEditiding ? (
        <S.Edititing>{'Editando: ' + title}</S.Edititing>
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
      <S.Description
        disabled={!isEditiding}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {isEditiding ? (
          <>
            <S.SaveButton onClick={saveEdititing}>Salvar</S.SaveButton>
            <S.CancelRemoveButton onClick={cancelEdititing}>
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
