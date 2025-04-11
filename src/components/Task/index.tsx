import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Nome da tarefa</S.Title>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Task
