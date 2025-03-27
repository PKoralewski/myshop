import { useDispatch } from "react-redux"

import { updateQuantity as updateCartQuantity } from "../store/CartSlice"
import { updateQuantity as updateProductQuantity } from "../store/ProductsSlice"

export const useUpdateProduct = () => {
	const dispatch = useDispatch()

	const updateCartProduct = (id: number, quantity: number, availableQuantity: number) => {
		dispatch(updateCartQuantity({ id, quantity }))
		dispatch(updateProductQuantity({ id, quantity: availableQuantity - quantity }))
	}

	return updateCartProduct
}
