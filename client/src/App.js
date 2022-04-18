import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ListProduct from './components/ListProduct/ListProduct';
// import DetailProduct from './components/DetailProduct/DetailProduct';
import AddProduct from './components/AddProduct';
import SignUp from './components/SignUP/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
// import ListMenProd from './components/Men/ListMenProd';

function App() {
  return (
    <div className="App">

      {/* <Dashboard />
      <ListProduct /> */}
      <Router>
      <Dashboard />
      <AddProduct />
        <Routes>
          <Route path="/" element={<ListProduct />} />
          {/* <Route path="/detailProduct/:_id" element={<DetailProduct />} /> */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path='/updateProduct/:_id' element={<UpdateProduct />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;