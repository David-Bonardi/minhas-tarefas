import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList
