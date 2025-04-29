import { Provider } from 'react-redux'
import Sidebar from './containers/Sidebar'
import TodoList from './containers/TodoList'
import GlobalStyle, { Container } from './styles'

import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <TodoList />
        </Container>
      </Provider>
    </div>
  )
}

export default App
