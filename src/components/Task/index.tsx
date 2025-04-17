import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [isEditiding, setIsEdititing] = useState(false)

  return (
    <S.Card>
      {isEditiding ? (
        <S.Title>{'Editando: ' + title}</S.Title>
      ) : (
        <S.Title>{title}</S.Title>
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
            <S.CancelRemoveButton>Remover</S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
