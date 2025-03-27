import { useState } from "react"

import "./ProductDetails.css"
import withProductDetails from "../../../hoc/withProductDetails"
import ProductProps from "../shared/ProductProps"
import { useAddToCart } from "../../../hooks/useAddToCart"

const ProductDetails = ({ product }: { product: ProductProps }) => {
	const [quantity, setQuantity] = useState(1)
	const addToCart = useAddToCart()

	const handleAddToCart = () => {
		if (product.quantity === 0 || quantity < 1) return

		addToCart(product, quantity)
		setQuantity(1)
	}

	return (
		<div className='product-details'>
			<h1>{product.name}</h1>
			<div className='product-image'>
				<img src={require(`../../../assets/images/${product.image}`)} alt={product.name} />
			</div>
			<p className='product-description'>{product.description}</p>
			<div className='product-details-info'>
				<p className='product-price'>{product.price} zł</p>
				<p className='product-quantity'>Dostępna ilość: {product.quantity}</p>
				<div className='quantity-box'>
					<label htmlFor='quantity'>Ilość:</label>
					<input
						id='quantity'
						type='number'
						value={quantity}
						onChange={(e) => setQuantity(Number(e.target.value))}
						min={1}
						max={product.quantity}
						disabled={product.quantity === 0}
					/>
				</div>
				<button
					className='add-to-cart-button'
					onClick={handleAddToCart}
					disabled={product.quantity === 0 || quantity < 1 || quantity > product.quantity}
				>
					Dodaj do koszyka
				</button>
			</div>
		</div>
	)
}

export default withProductDetails(ProductDetails)
