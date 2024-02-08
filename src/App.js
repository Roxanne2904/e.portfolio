import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Page from "./pages/Page/Page.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
	// const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/about"
						element={<Page title="À propos" content={"about"} />}
					/>
					<Route
						path="/skills"
						element={<Page title="Mes compétences" content={"skills"} />}
					/>
					<Route
						path="/projects"
						element={<Page title="Mes projets terminés" content={"projects"} />}
					/>
					<Route
						path="/projects-in-progress"
						element={
							<Page
								title="Mes projets en cours"
								content={"projectsInProgress"}
							/>
						}
					/>
					<Route
						path="/challenges"
						element={<Page title="Mes défis" content={"challenges"} />}
					/>
				</Routes>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default App;
