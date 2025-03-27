import React from "react"
import { useDispatch } from "react-redux"

import "./CartItems.css"
import { removeFromCart, updateQuantity } from "../../../store/CartSlice"
import { CartItemsProps } from "./CartItemsProps"

const CartItems: React.FC<CartItemsProps> = ({ cartProducts }) => {
	const dispatch = useDispatch()

	const handleQuantityChange = (id: number, quantity: number) => {
		if (quantity <= 0) return
		dispatch(updateQuantity({ id, quantity }))
	}

	const handleRemoveFromCart = (id: number) => {
		dispatch(removeFromCart(id))
	}

	return (
		<ul>
			{cartProducts.map((product) => (
				<li key={product.id}>
					<div className='cart-item'>
						<div className='cart-item-details'>
							<img src={product.image} alt={product.name} className='cart-item-image' />
							<span>{product.name}</span>
							<span>{product.price} zł</span>
						</div>
						<div className='cart-item-actions'>
							<input
								type='number'
								min='1'
								value={product.quantity}
								onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
							/>
							<button className='cart-remove-btn' onClick={() => handleRemoveFromCart(product.id)}>
								Usuń
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

export default CartItems
