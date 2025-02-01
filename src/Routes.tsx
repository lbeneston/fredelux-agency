import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NoMatch } from "./pages/NoMatch/NoMatch";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}