import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEmployee/>}/>
        <Route path="/view" element={<ViewAll/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
