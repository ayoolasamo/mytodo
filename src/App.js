import './App.css';
import Todolist from './components/todolist';
import TaskContextProvider from './contexts/taskcontext';
import Header from './components/header';


function App() {
  
  return (
    <div>
      <TaskContextProvider>
        <Header/>
        <Todolist />
      </TaskContextProvider>
    </div>
  );
}

export default App;
