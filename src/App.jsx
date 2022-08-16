import React from 'react'
import Home from './pages/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route path='/' element={<Home />}></Route>
       </Switch>
    </Router>
    </>
  );
}

export default App;
