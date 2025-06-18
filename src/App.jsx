import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  );
}

export default App;
