import './App.css';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.count)
  return (
    <div className="App">
      <h1>Welcome to react-redux V{count}</h1>
      <Counter />
    </div>
  );
}

export default App;
