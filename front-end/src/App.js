import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h3>Product Listing Components</h3>} />
            <Route path="/add" element={<h3>Add Product Components</h3>} />
            <Route
              path="/update"
              element={<h3>Update Product Components</h3>}
            />
            <Route path="/logout" element={<h3>Logout Components</h3>} />
            <Route path="/profile" element={<h3>Profile Components</h3>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
