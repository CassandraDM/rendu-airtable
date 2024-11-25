import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/admin" className="nav-link">
          Admin
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit/:id" element={<EditPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
