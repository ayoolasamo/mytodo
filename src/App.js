import "./App.css";
import { ToDoList } from "./components/ToDoList/ToDoList";
import TaskContextProvider from "./contexts/task";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <TaskContextProvider>
        <Header />
        <ToDoList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
