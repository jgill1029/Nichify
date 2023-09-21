import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Recommendations from "./pages/Recommendations";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
