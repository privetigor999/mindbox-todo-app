import "./App.scss";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="mainWrapper">
      <div className="wrapper">
        <header>todos for mindbox</header>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
