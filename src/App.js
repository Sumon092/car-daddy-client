import logo from './logo.svg';
import './App.css';

import Header from './pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
