import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const name = useSelector(state=>state.name)
  console.log(name);
  return (
    <div className='metropolis w-full max-w-screen-sm flex-col-center mx-auto px-4 pb-20 relative '>
      <p className='uppercase text-xl ' >hi</p>
    </div>
  );
}

export default App;
