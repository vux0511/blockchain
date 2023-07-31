import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from "./pages/detail";
import LoginPage from "./pages/login";

function App() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/detail">Detail</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/profile" element={<LoginPage />} />
            </Routes>
        </nav>
    );
}

export default App;
