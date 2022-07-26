import "./App.scss";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="mainWrapper">
      <div className="wrapper">
        <header>todos for mindbox</header>
        <TodoInput />
        <TodoList />
        <footer>
          <p>2 items left</p>
          <div>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <p className="clearButton">Clear completed</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
