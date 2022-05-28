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
import AllUsers from './Dashboard/AllUsers';
import ManageOrders from './Dashboard/ManageOrders';
import AddProduct from './Dashboard/AddProduct';
import ManageProduct from './Dashboard/ManageProduct';
import NotFound from './NotFound/NotFound';
import PurchaseNow from './Transactions/PurchaseNow';
import RequireAdmin from './Login/RequireAdmin';
import Blogs from './pages/Blogs';
import MyPortfolio from './pages/MyPortfolio';
import Reviews from './pages/Home/Reviews';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/purchase/:id' element={<RequiredAuth><PurchaseNow></PurchaseNow></RequiredAuth>}></Route>
        <Route path='dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </>
  );
}

export default App;
