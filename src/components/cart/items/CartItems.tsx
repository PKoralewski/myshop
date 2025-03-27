import React from "react"
import { useDispatch } from "react-redux"

import "./CartItems.css"
import { removeFromCart } from "../../../store/CartSlice"
import { CartItemsProps } from "./CartItemsProps"
import { useUpdateProduct } from "../../../hooks/useUpdateProduct"
import { CartProductProps } from "../../../store/CartProductProps"

const CartItems: React.FC<CartItemsProps> = ({ cartProducts }) => {
	const dispatch = useDispatch()
	const updateProduct = useUpdateProduct()

	const handleQuantityChange = (product: CartProductProps, quantity: number, availableQuantity: number) => {
		if (quantity <= 0 || !quantity || quantity > availableQuantity) return

		updateProduct(product, quantity)
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
							<img
								src={require(`../../../assets/images/${product.image}`)}
								alt={product.name}
								className='cart-item-image'
							/>
							<p className='product-name'>{product.name}</p>
							<p>{product.price} zł</p>
						</div>
						<div className='cart-item-actions'>
							<div className='cart-quantity-box'>
								<input
									type='number'
									min={1}
									max={product.availableQuantity}
									value={product.quantity}
									onChange={(e) =>
										handleQuantityChange(
											product,
											parseInt(e.target.value),
											product.availableQuantity,
										)
									}
								/>
								<p>Max. {product.availableQuantity}</p>
							</div>
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
