import { useSelector } from "react-redux"

import "./CartButton.css"
import CartIcon from "../../assets/icons/CartIcon"
import { RootState } from "../../store"

const CartButton = () => {
	const cartProducts = useSelector((state: RootState) => state.cart.products)

	return (
		<button className='cart-btn' style={{ color: cartProducts.length ? "#209CEE" : "#B0B0B0" }}>
			<p>{cartProducts.length}</p>
			<CartIcon />
		</button>
	)
}

export default CartButton
