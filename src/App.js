import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Page from "./pages/Page/Page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page title="A propos" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
