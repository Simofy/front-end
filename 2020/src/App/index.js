import { useEffect, useMemo } from 'react';
import './App.css';
import Loader from './components/Loader';

function App() {
  useMemo(() => { }, []);
  useEffect(() => {
    document.body.style.background = 'white';
  }, []);
  return (
    <div className="App">
      <Loader />
    </div>
  );
}

export default App;
