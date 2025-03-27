import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { products } from "../data/products"

const initialState = {
	products,
}

const ProductsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
			const item = state.products.find((item) => item.id === action.payload.id)

			if (item) {
				item.quantity = action.payload.quantity
			}
		},
	},
})

export const { updateQuantity } = ProductsSlice.actions
export default ProductsSlice.reducer
