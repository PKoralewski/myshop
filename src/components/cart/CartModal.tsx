import React from "react"
import { useDispatch } from "react-redux"

import "./CartModal.css"
import { CartModalProps } from "./CartModalProps"
import { clearCart } from "../../store/CartSlice"
import CartItems from "./CartItems"
import CartSummary from "./CartSummary"

const CartModal: React.FC<CartModalProps> = ({ onClose, cartProducts }) => {
	const dispatch = useDispatch()

	const handleClearCart = () => {
		dispatch(clearCart())
		onClose()
	}

	return (
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<h2>Twój koszyk</h2>
				{cartProducts.length === 0 ? (
					<>
						<p>Twój koszyk jest pusty.</p>
						<div className='cart-empty-info-btn'>
							<button className='cart-cancel-btn' onClick={onClose}>
								Zamknij
							</button>
						</div>
					</>
				) : (
					<>
						<CartItems cartProducts={cartProducts} />
						<CartSummary cartProducts={cartProducts} onClearCart={handleClearCart} onClose={onClose} />
					</>
				)}
			</div>
		</div>
	)
}

export default CartModal
