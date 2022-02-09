import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddFood from './Pages/Admin/AddFood/AddFood';
import AddStudent from './Pages/Admin/AddStudent/AddStudent';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import AdminDashboardHome from './Pages/Admin/AdminDashboardHome/AdminDashboardHome';
import AllFoods from './Pages/Admin/AllFoods/AllFoods';
import AllStudents from './Pages/Admin/AllStudents/AllStudents';
import Foods from './Pages/Foods/Foods';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/LoginSignup/AdminRoute/AdminRoute';
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
          <Route path="/foods" element={<Foods />}></Route>
          <Route path="/dashboard" element={<PrivateRoute> <AdminDashboard /> </PrivateRoute>}>
          <Route path={`/dashboard`} element={
            <AdminRoute>
                <AdminDashboardHome></AdminDashboardHome>
            </AdminRoute>
          }></Route>
          <Route path={`/dashboard/allFoods`} element={
            <AdminRoute>
                <AllFoods></AllFoods>
            </AdminRoute>
          }></Route>
          <Route path={`/dashboard/allStudents`} element={
            <AdminRoute>
                <AllStudents></AllStudents>
            </AdminRoute>
          }></Route>
          <Route path={`/dashboard/addFood`} element={
            <AdminRoute>
                <AddFood></AddFood>
            </AdminRoute>
          }></Route>
          <Route path={`/dashboard/addStudent`} element={
            <AdminRoute>
                <AddStudent></AddStudent>
            </AdminRoute>
          }></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
