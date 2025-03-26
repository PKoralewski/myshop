import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./store/CartSlice"
import productsReducer from "./store/ProductsSlice"

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
