import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import './styles/global.scss'


export function App() {
  return (
    <>
      <Header />
      <TaskList />
      <Modal />
    </>
  )
}