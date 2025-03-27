import { useDispatch } from "react-redux"

import ProductProps from "../components/products/shared/ProductProps"
import { addToCart } from "../store/CartSlice"
import { updateQuantity } from "../store/ProductsSlice"

export const useAddToCart = () => {
	const dispatch = useDispatch()

	const addProductToCart = (product: ProductProps, quantity: number) => {
		dispatch(addToCart({ product, quantity }))
		dispatch(updateQuantity({ id: product.id, quantity: product.quantity - quantity }))
	}

	return addProductToCart
}
