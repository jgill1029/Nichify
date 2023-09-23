import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recommendations from "./pages/Recommendations";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
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
