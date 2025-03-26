import React from "react"

import "./ProductRow.css"
import ProductRowProps from "./ProductRowProps"
import AddToCartIcon from "../assets/icons/AddToCartIcon"
import ArrowRightIcon from "../assets/icons/ArrowRightIcon"

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
	return (
		<tr>
			<td>
				<div className='product-row-image-box'>
					<img src={product.image} width={"35px"}></img>
				</div>
			</td>
			<td>{product.name}</td>
			<td>{product.price} zł</td>
			<td>
				<input type='number' defaultValue={1} min={1} />
			</td>
			<td>
				<div className='product-row-buttons-box'>
					<button style={{ width: 38, height: 38 }}>
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
