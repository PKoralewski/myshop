import React, { useState } from "react"
import { useDispatch } from "react-redux"

import "./ProductRow.css"
import ProductRowProps from "./ProductRowProps"
import AddToCartIcon from "../../../assets/icons/AddToCartIcon"
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon"
import { addToCart } from "../../../store/CartSlice"
import { updateQuantity } from "../../../store/ProductsSlice"

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState(1)

	const handleAddToCart = () => {
		if (product.quantity === 0 || quantity < 1) return
		dispatch(addToCart({ ...product, quantity }))
		dispatch(updateQuantity({ id: product.id, quantity }))
		setQuantity(1)
	}

	return (
		<tr>
			<td>
				<div className='product-row-image-box'>
					<img src={product.image} width={"35px"} alt={product.name} />
				</div>
			</td>
			<td>{product.name}</td>
			<td>{product.price} zł</td>
			<td>
				<input
					className='product-row-count-input'
					type='number'
					disabled={!product.quantity}
					value={quantity}
					min={1}
					max={product.quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}
				/>
			</td>
			<td>
				<div className='product-row-buttons-box'>
					<button
						disabled={!product.quantity || quantity < 0}
						style={{ width: 38, height: 38 }}
						onClick={handleAddToCart}
					>
						<AddToCartIcon />
					</button>
					<button style={{ width: 38, height: 38 }}>
						<ArrowRightIcon />
					</button>
				</div>
			</td>
		</tr>
	)
}

export default ProductRow
