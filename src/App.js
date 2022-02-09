import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LoginSignup/Login/Login';
import Register from './Pages/LoginSignup/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={
            <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
          }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
