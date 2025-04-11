import Sidebar from './containers/Sidebar'
import TodoList from './containers/TodoList'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <EstiloGlobal />
        <Container>
          <Sidebar />
          <TodoList />
        </Container>
      </>
    </div>
  )
}

export default App
