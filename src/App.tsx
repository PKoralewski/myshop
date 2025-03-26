import { Routes, Route, BrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Layout from "./layout/Layout"

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='*' element={<HomePage />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
