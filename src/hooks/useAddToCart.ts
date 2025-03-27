import { useDispatch } from "react-redux"

import ProductProps from "../components/products/shared/ProductProps"
import { addToCart } from "../store/CartSlice"
import { updateQuantity } from "../store/ProductsSlice"

export const useAddToCart = () => {
	const dispatch = useDispatch()

	const addProductToCart = (
		product: ProductProps,
		quantity: number,
		setQuantity: React.Dispatch<React.SetStateAction<number>>,
	) => {
		if (product.quantity === 0 || quantity < 1) return
		console.log(quantity)

		dispatch(addToCart({ ...product, quantity }))
		dispatch(updateQuantity({ id: product.id, quantity }))
		setQuantity(1)
	}

	return addProductToCart
}
