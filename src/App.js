import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
  <div>
    <h1>My Todos</h1>
    <Todo text='Learn React'/>
    <Todo text='Learn Angular'/>
    <Todo text='Learn Vue'/>
    <Todo text='Look At Courses'/>
    <Modal />
    <Backdrop />
  </div>
  );
}

export default App;
