import { useState } from "react"

import "./CartButton.css"
import CartIcon from "../assets/icons/CartIcon"

const CartButton = () => {
	const [isEmpty] = useState(false)
	return (
		<button className='cart-btn' style={{ color: isEmpty ? "#B0B0B0" : "#209CEE" }}>
			<CartIcon />
		</button>
	)
}

export default CartButton
