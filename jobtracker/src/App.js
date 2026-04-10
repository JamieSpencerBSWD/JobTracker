import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobTracker from './pages/JobTracker';

function App() {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<JobTracker/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
