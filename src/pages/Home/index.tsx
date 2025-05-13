import ButtonAdd from '../../components/ButtonAdd'
import Sidebar from '../../containers/Sidebar'
import TodoList from '../../containers/TodoList'

const Home = () => (
  <>
    <Sidebar />
    <TodoList />
    <ButtonAdd />
  </>
)

export default Home
