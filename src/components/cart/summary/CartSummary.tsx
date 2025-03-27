import React from "react"

import "./CartSummary.css"
import { CartSummaryProps } from "./CartSummaryProps"

const CartSummary: React.FC<CartSummaryProps> = ({ cartProducts, onClearCart, onClose }) => {
	const totalPrice = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)

	return (
		<div className='cart-summary'>
			<p>Podsumowanie:</p>
			<div className='cart-sum'>
				<p>Suma:</p>
				<p className='cart-price-summary'>{totalPrice} zł</p>
			</div>
			<div className='cart-buttons-box'>
				<button className='cart-order-btn' onClick={onClearCart}>
					Zamów
				</button>
				<button className='cart-cancel-btn' onClick={onClose}>
					Zamknij
				</button>
			</div>
		</div>
	)
}

export default CartSummary
