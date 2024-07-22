import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <img src="/img/logo.png" alt="logo"/>
      <TodoWrapper/>
      <div><h1 style={{fontSize:"15px",color:"#8758ff"}}>Made by Baygeldiev Samat</h1></div>
    </div>
  );
}

export default App;