import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container, SearchResult } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let tasksFiltered = items

    if (term !== undefined) {
      tasksFiltered = tasksFiltered.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
    }
    if (criterion === 'prioridade') {
      tasksFiltered = tasksFiltered.filter((item) => item.priority === value)
    } else if (criterion === 'status') {
      tasksFiltered = tasksFiltered.filter((item) => item.status === value)
    } else {
      return items
    }

    return tasksFiltered
  }

  const showFilterResults = (quantity: number) => {
    let message = ''
    const complementation =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''
    if (criterion === 'todas') {
      message = `${quantity} tarefa(s) marcada(s) como: todas ${complementation}`
    } else {
      message = `${quantity} tarefa(s) marcada(s) como: "${value}" ${complementation}`
    }
    return message
  }

  const tasks = filterTasks()
  const message = showFilterResults(tasks.length)

  return (
    <Container>
      <SearchResult>{message}</SearchResult>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
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
