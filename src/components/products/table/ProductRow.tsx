import React, { useState } from "react"

import "./ProductRow.css"
import ProductRowProps from "./ProductRowProps"
import AddToCartIcon from "../../../assets/icons/AddToCartIcon"
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon"
import { useNavigate } from "react-router-dom"
import { useAddToCart } from "../../../hooks/useAddToCart"

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
	const [quantity, setQuantity] = useState(1)
	const addToCart = useAddToCart()
	const navigate = useNavigate()

	const handleAddToCart = () => {
		if (product.quantity === 0 || quantity < 1) return

		addToCart(product, quantity)
		setQuantity(1)
	}

	const handleNavigateToDetails = () => {
		navigate(`/product/${product.id}`)
	}

	return (
		<tr className='product-row'>
			<td>
				<div className='product-row-image-box'>
					<img src={require(`../../../assets/images/${product.image}`)} alt={product.name} />
				</div>
			</td>
			<td>
				<div className='product-row-name'>{product.name}</div>
			</td>
			<td>
				<div className='product-row-price'>{product.price} zł</div>
			</td>
			<td className='product-row-count'>
				{product.quantity === 0 ? (
					"Niedostępne"
				) : (
					<>
						<input
							className='product-row-count-input'
							type='number'
							value={quantity}
							onChange={(e) => setQuantity(Number(e.target.value))}
							min={1}
							max={product.quantity}
							disabled={product.quantity === 0}
						/>
						<p>Max. {product.quantity}</p>
					</>
				)}
			</td>
			<td>
				<div className='product-row-buttons-box'>
					<button
						disabled={!product.quantity || quantity < 1 || quantity > product.quantity}
						onClick={handleAddToCart}
					>
						<AddToCartIcon />
					</button>
					<button onClick={handleNavigateToDetails}>
						<ArrowRightIcon />
					</button>
				</div>
			</td>
		</tr>
	)
}

export default ProductRow
