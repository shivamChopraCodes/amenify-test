import { useSelector } from 'react-redux';
import './App.css';
import Board from './Components/Board';
import Homepage from './Components/Homepage';

function App() {
  const name = useSelector(state => state.name)
  return (
    <div className='App flex w-full h-full ' >
      <Board />
    </div>
  );
}

export default App;
