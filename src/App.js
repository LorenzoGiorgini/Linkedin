import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from './views/Profile';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;