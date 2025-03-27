import { Routes, Route, BrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Layout from "./layout/Layout"
import ProductDetails from "./components/products/details/ProductDeatils"

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='product/:id' element={<ProductDetails />} />
				<Route path='*' element={<HomePage />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
