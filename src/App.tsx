import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='product/:id' element={<ProductPage />} />
				<Route path='*' element={<HomePage />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
