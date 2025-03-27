import React from "react"

import "./CartItems.css"
import { CartItemsProps } from "./CartItemsProps"
import { useUpdateProduct } from "../../../hooks/useUpdateProduct"
import { useRemoveCartProduct } from "../../../hooks/useRemoveCartProduct"

const CartItems: React.FC<CartItemsProps> = ({ cartProducts }) => {
	const updateProduct = useUpdateProduct()
	const removeProduct = useRemoveCartProduct()

	const handleQuantityChange = (id: number, quantity: number, availableQuantity: number) => {
		if (quantity <= 0 || !quantity || quantity > availableQuantity) return

		updateProduct(id, quantity, availableQuantity)
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
											product.id,
											parseInt(e.target.value),
											product.availableQuantity,
										)
									}
								/>
								<p>Max. {product.availableQuantity}</p>
							</div>
							<button
								className='cart-remove-btn'
								onClick={() => removeProduct(product.id, product.availableQuantity)}
							>
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
