import { useDispatch } from "react-redux"

import { updateQuantity } from "../store/ProductsSlice"
import { removeFromCart } from "../store/CartSlice"

export const useRemoveCartProduct = () => {
	const dispatch = useDispatch()

	const removeCartProduct = (id: number, quantity: number) => {
		dispatch(removeFromCart(id))
		dispatch(updateQuantity({ id, quantity }))
	}

	return removeCartProduct
}
