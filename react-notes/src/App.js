import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";

function App() {
	return (
		<AlertState>
			<BrowserRouter>
				<NavBar></NavBar>
				<div className="container pt-4">
					<Alert />
					<Routes>
						<Route path={"/"} exact element={<Home />}></Route>
						<Route path={"/about"} element={<About />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</AlertState>
	);
}

export default App;
