import './App.css';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';
import Edit from './Component/Edit';


function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
