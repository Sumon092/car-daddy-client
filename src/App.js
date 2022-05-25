import logo from './logo.svg';
import './App.css';

import Header from './pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Dashboard from './Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders';
import AddReview from './Dashboard/AddReview';
import MyProfile from './Dashboard/MyProfile';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import RequiredAuth from './Login/RequireAuth';
import Purchase from './Transactions/Purchase';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        </Route>


      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </>
  );
}

export default App;
