import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/employee-list" element={<EmployeeLit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
