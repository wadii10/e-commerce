import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ListProduct from './components/ListProduct/ListProduct';
import DetailProduct from './components/DetailProduct/DetailProduct';
import AddProduct from './components/AddProduct';
import SignUp from './components/SignUP/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
// import CartList from './components/Carts/CartList';
import CartScreen from './components/Carts/CartScreen';
import ListMenProd from './components/Men/ListMenProd';
// import ListKidsProd from './components/Kids/ListKidsProd';
import ListWomenProd from './components/Women/ListWomenProd';
import { useSelector } from 'react-redux';

function App() {

  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="App">

      {/* <Dashboard />
      <ListProduct /> */}
      <Router>
      <Dashboard />
      {user && user.userRole === "admin" ? <AddProduct /> : null }
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailProduct/:_id" element={<DetailProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart/:_id" element={<CartScreen />} />
          <Route path="/men" element={<ListMenProd />} />
          <Route path="/women" element={<ListWomenProd />} /> 
          {/* <Route path="/kids" element={<ListKidsProd />} /> */}
          {/* <Route path='/updateProduct/:_id' element={<UpdateProduct />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
