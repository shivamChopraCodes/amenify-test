import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Homepage from './Components/Homepage';

function App() {
  const name = useSelector(state => state.name)
  console.log(name);
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />

    </Routes>
  );
}

export default App;
