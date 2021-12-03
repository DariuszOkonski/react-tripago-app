import React from 'react';
import { BrowserRouter,  Routes ,Route } from 'react-router-dom';
import '../assets/css/App.css';
import { Home } from './Home';
import { Navbar } from './Navbar';

function App() {
  return (    
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/holidays' element={<h1>Holidays</h1>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
