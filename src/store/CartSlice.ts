import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CartStateProps } from "./CartStateProps"
import { CartItemProps } from "./CartItemProps"

const initialState: CartStateProps = {
	products: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItemProps>) => {
			const existingItem = state.products.find((item) => item.id === action.payload.product.id)

			if (existingItem) {
				existingItem.quantity += action.payload.quantity
				return
			}

			state.products.push({
				...action.payload.product,
				quantity: action.payload.quantity,
				availableQuantity: action.payload.product.quantity,
			})
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter((item) => item.id !== action.payload)
		},
		updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
			const item = state.products.find((item) => item.id === action.payload.id)
			if (item) {
				item.quantity = action.payload.quantity
			}
		},
		clearCart: (state) => {
			state.products = []
		},
	},
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
