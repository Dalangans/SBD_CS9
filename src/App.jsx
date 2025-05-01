import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure the path is correct
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products'; // Import the Products page

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should render above the Routes */}
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} /> {/* Redirect default route to /products */}
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
