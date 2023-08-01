import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/marketplace" element={<MarketPage />} />
                <Route path="/profile" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
