import Todo from "./components/Todo";

function App() {
  return (
  <div>
    <h1>My Todos</h1>
    <Todo text='Learn React'/>
    <Todo text='Learn Angular'/>
    <Todo text='Learn Vue'/>
    <Todo text='Look At Courses'/>
  </div>
  );
}

export default App;
