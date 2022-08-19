import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Page from "./pages/Page/Page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<Page title="À propos..." content={"about"} />}
        />
        <Route
          path="/skills"
          element={<Page title="Mes compétences..." content={"skills"} />}
        />
        <Route
          path="/projects"
          element={<Page title="Mes projets..." content={"projects"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
