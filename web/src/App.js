import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <>

<Router>
            <Routes>
                <Route path="/" element={<Login />} />  
                <Route path="/home" element={<Home />} /> 
            </Routes>
        </Router>
    </>
  );
}

export default App;
