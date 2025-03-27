import { useDispatch } from "react-redux"

import { updateQuantity as updateCartQuantity } from "../store/CartSlice"
import { updateQuantity as updateProductQuantity } from "../store/ProductsSlice"
import { CartProductProps } from "../store/CartProductProps"

export const useUpdateProduct = () => {
	const dispatch = useDispatch()

	const updateCartProduct = (product: CartProductProps, quantity: number) => {
		dispatch(updateCartQuantity({ id: product.id, quantity }))
		dispatch(updateProductQuantity({ id: product.id, quantity: product.availableQuantity - quantity }))
	}

	return updateCartProduct
}
