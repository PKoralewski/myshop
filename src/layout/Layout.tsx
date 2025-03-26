import { Outlet } from "react-router-dom"

import "./Layout.css"
import CartButton from "../components/CartButton"

const Layout = () => {
	return (
		<main>
			<header>
				<div className='header-box'>
					<h1>My Shop</h1>
					<CartButton />
				</div>
			</header>
			<Outlet />
		</main>
	)
}

export default Layout
