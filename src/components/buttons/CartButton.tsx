import { useState } from "react"
import { useSelector } from "react-redux"

import "./CartButton.css"
import { RootState } from "../../store"
import CartIcon from "../../assets/icons/CartIcon"
import CartModal from "../cart/modal/CartModal"

const CartButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const cartProducts = useSelector((state: RootState) => state.cart.products)

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<button
				className='cart-btn'
				style={{ color: cartProducts.length ? "#209CEE" : "#B0B0B0" }}
				onClick={handleOpenModal}
			>
				<p>{cartProducts.length}</p>
				<CartIcon />
			</button>

			{isModalOpen && <CartModal onClose={handleCloseModal} cartProducts={cartProducts} />}
		</>
	)
}

export default CartButton
